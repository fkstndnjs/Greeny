import { Controller, Post, Body, Query, ParseBoolPipe } from '@nestjs/common';
import { UserService } from './user.service';``
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { FindEmailDto } from 'src/user/dto/findIdByEmail.dto';
import { FindPasswordDto } from 'src/user/dto/findPassword.dto';
import { RoleType } from '../common/enum/RoleType';
import { ApiSuccessResponse } from '../common/decorator/successResponse';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'sadf',
    description: 'aaa',
  })
  @Post('signup')
  @ApiSuccessResponse({paginated: false, model: })
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
  async findId(
    @Body() body: FindEmailDto,
    @Query('isFull', ParseBoolPipe) isFull: boolean,
  ): Promise<{
    message: string;
  }> {
    return this.userService.findId(body, isFull);
  }

  @Post('pw')
  async findPassword(@Body() body: FindPasswordDto): Promise<{
    message: string;
  }> {
    return this.userService.findPassword(body);
  }
}
