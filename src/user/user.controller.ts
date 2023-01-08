import { Controller, Post, Body, Query, ParseBoolPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { VerifyEmailDto } from './dto/verifyEmail.dto';
import { FindEmailDto } from 'src/user/dto/findIdByEmail.dto';

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

  @Post('id')
  async findIdByEmail(
    @Body() body: FindEmailDto,
    @Query('isFull', ParseBoolPipe) isFull: boolean,
  ) {
    return this.userService.findIdByEmail(body, isFull);
  }

  // @Post('pw')
  // async findPassword(@Query() query: VerifyEmailDto): Promise<{
  //   token: string;
  // }> {
  //   const { signupVerifyToken } = query;

  //   return await this.userService.verifyEmail(signupVerifyToken);
  // }
}
