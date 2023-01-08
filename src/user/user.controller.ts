import { Controller, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { VerifyEmailDto } from './dto/verifyEmail.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto): Promise<{
    email: string;
  }> {
    return this.userService.signUp(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto): Promise<{
    token: string;
  }> {
    return this.userService.login(body);
  }

  // @Post('id')
  // async findEmail(@Body() body: FindEmailDto){
  //   return this.userService.findEmail(body);
  // }

  // @Post('pw')
  // async findPassword(@Query() query: VerifyEmailDto): Promise<{
  //   token: string;
  // }> {
  //   const { signupVerifyToken } = query;

  //   return await this.userService.verifyEmail(signupVerifyToken);
  // }
}
