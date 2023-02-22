import { FindPasswordDto } from './dto/findPassword.dto';
import { FindEmailDto } from './dto/findIdByEmail.dto';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { EmailService } from '../email/email.service';
import { LoginDto } from './dto/login.dto';
import { AuthService } from '../auth/auth.service';
export declare class UserService {
    private userRepository;
    private dataSource;
    private emailService;
    private authService;
    constructor(userRepository: Repository<User>, dataSource: DataSource, emailService: EmailService, authService: AuthService);
    signUp(body: CreateUserDto): Promise<{
        email: string;
    }>;
    login(body: LoginDto): Promise<{
        token: string;
    }>;
    findId(body: FindEmailDto, isFull: boolean): Promise<{
        message: string;
    }>;
    findPassword(body: FindPasswordDto): Promise<{
        message: string;
    }>;
    private saveUser;
    private checkUserExistByEmail;
    findById(id: number): Promise<User>;
}
