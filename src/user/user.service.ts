import { maskWord } from './../utils/maskWord';
import { FindEmailDto } from './dto/findIdByEmail.dto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
    private emailService: EmailService,
    private authService: AuthService,
  ) {}

  async signUp(body: CreateUserDto): Promise<{
    email: string;
  }> {
    const { name, userId, password, email, nickname } = body;

    const userExist = await this.checkUserExistByEmail(email);
    if (userExist) {
      throw new ConflictException('이미 가입된 계정입니다');
    }

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS),
    );

    await this.saveUser(name, email, userId, hashedPassword, nickname);

    return { email };
  }

  async login(body: LoginDto): Promise<{
    token: string;
  }> {
    const { userId, password } = body;

    const user = await this.userRepository.findOne({
      where: {
        userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('아이디 혹은 비밀번호가 틀렸습니다');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException('아이디 혹은 비밀번호가 틀렸습니다');
    }

    return this.authService.login(user.id);
  }

  async findIdByEmail(body: FindEmailDto, isFull: boolean) {
    const { name, email } = body;

    const user = await this.userRepository.findOne({
      where: {
        name,
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        '입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다',
      );
    }

    if (isFull) {
      await this.emailService.sendMail(email, user.userId);
    }

    return {
      id: maskWord(user.userId),
    };
  }

  private async saveUser(
    name: string,
    email: string,
    userId: string,
    password: string,
    nickname: string,
  ): Promise<void> {
    this.dataSource.transaction(async (manager) => {
      const user = new User();
      user.name = name;
      user.email = email;
      user.userId = userId;
      user.password = password;
      user.nickname = nickname;
      await manager.save(user);
    });
  }

  private async checkUserExistByEmail(email: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    return !!user;
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
