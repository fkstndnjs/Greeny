import { FindPasswordDto } from './dto/findPassword.dto';
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
import { RoleType } from '../common/enum/RoleType';

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

    await this.saveUser(name, email, userId, password, nickname);

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

    const isCorrectPassword = password === user.password;

    if (!isCorrectPassword) {
      throw new UnauthorizedException('아이디 혹은 비밀번호가 틀렸습니다');
    }

    return this.authService.login(user.id);
  }

  async findId(
    body: FindEmailDto,
    isFull: boolean,
  ): Promise<{
    message: string;
  }> {
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
      return {
        message: `회원님의 이메일로 아이디가 전송되었습니다`,
      };
    }

    return {
      message: `회원님의 아이디는 ${maskWord(user.userId)}입니다`,
    };
  }

  async findPassword(body: FindPasswordDto): Promise<{
    message: string;
  }> {
    const { name, email, userId } = body;

    const user = await this.userRepository.findOne({
      where: {
        name,
        email,
        userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        '입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다',
      );
    }
    await this.emailService.sendMail(email, user.password);

    return {
      message: '회원님의 이메일로 비밀번호가 전송되었습니다.',
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
      user.role = RoleType.USER;
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
