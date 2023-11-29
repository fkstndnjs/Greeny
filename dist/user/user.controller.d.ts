import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { FindEmailDto } from 'src/user/dto/findIdByEmail.dto';
import { FindPasswordDto } from 'src/user/dto/findPassword.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
}
