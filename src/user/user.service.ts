import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
    private emailService: EmailService,
  ) {}

  async createUser(body: CreateUserDto) {
    const { name, password, email, nickname } = body;

    const userExist = await this.checkUserExistByEmail(email);
    if (userExist) {
      throw new ConflictException('이미 가입된 계정입니다.');
    }

    const signupVerifyToken = uuid.v1();
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS),
    );

    await this.saveUser(
      name,
      email,
      hashedPassword,
      nickname,
      signupVerifyToken,
    );
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private async saveUser(
    name: string,
    email: string,
    password: string,
    nickname: string,
    signupVerifyToken: string,
  ): Promise<void> {
    this.dataSource.transaction(async (manager) => {
      const user = new User();
      user.name = name;
      user.email = email;
      user.password = password;
      user.nickname = nickname;
      user.signupVerifyToken = signupVerifyToken;
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
  ): Promise<void> {
    await this.emailService.sendSignUpMail(email, signupVerifyToken);
  }
}
