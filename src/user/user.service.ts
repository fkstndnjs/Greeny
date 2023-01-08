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
    const { name, password, email, nickname } = body;

    const userExist = await this.checkUserExistByEmail(email);
    if (userExist) {
      throw new ConflictException('이미 가입된 계정입니다.');
    }

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS),
    );

    await this.saveUser(name, email, hashedPassword, nickname);

    return { email };
  }

  async login(body: LoginDto): Promise<{
    token: string;
  }> {
    const { email, password } = body;

    const user = await this.userRepository.findOneOrFail({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('이메일 혹은 비밀번호가 틀렸습니다.');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException('이메일 혹은 비밀번호가 틀렸습니다.');
    }

    return this.authService.login(user.id);
  }

  async verifyEmail(signupVerifyToken: string): Promise<{
    token: string;
  }> {
    const user = await this.userRepository.findOne({
      where: {
        signupVerifyToken,
      },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    return this.authService.login(user.id);
  }

  private async saveUser(
    name: string,
    email: string,
    password: string,
    nickname: string,
  ): Promise<void> {
    this.dataSource.transaction(async (manager) => {
      const user = new User();
      user.name = name;
      user.email = email;
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

  private async sendMemberJoinEmail(
    email: string,
    signupVerifyToken: string,
  ): Promise<{
    message: string;
  }> {
    return await this.emailService.sendSignUpMail(email, signupVerifyToken);
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
