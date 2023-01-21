import { Controller, Post, Body, Query, ParseBoolPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { FindEmailDto } from 'src/user/dto/findIdByEmail.dto';
import { FindPasswordDto } from 'src/user/dto/findPassword.dto';
import { RoleType } from '../common/enum/RoleType';
import { ApiSuccessResponse } from '../common/decorator/successResponse';
import { SignUpSuccessResponseDto } from 'src/user/dto/signUpSuccessResponse.dto';
import { LoginSuccessResponseDto } from 'src/user/dto/loginSuccessResponse.dto';
import { FindIdSuccessResponseDto } from 'src/user/dto/findIdSuccessResponse.dto';
import { FindIdSuccessResponseDto2 } from 'src/user/dto/findIdSuccessResponse2.dto ';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '회원가입',
  })
  @Post('signup')
  @ApiSuccessResponse({ paginated: false, model: SignUpSuccessResponseDto })
  async signUp(@Body() body: CreateUserDto): Promise<{
    email: string;
  }> {
    return this.userService.signUp(body);
  }

  @ApiOperation({
    summary: '로그인',
  })
  @Post('login')
  @ApiSuccessResponse({ paginated: false, model: LoginSuccessResponseDto })
  async login(@Body() body: LoginDto): Promise<{
    token: string;
  }> {
    return this.userService.login(body);
  }

  @ApiOperation({
    summary: '아이디 찾기',
  })
  @Post('id')
  @ApiSuccessResponse({ paginated: false, model: FindIdSuccessResponseDto })
  @ApiQuery({
    name: 'isFull',
    type: 'boolean',
    description: 'isFull에 true값을 주면 이메일로 아이디 전체가 전송된다',
  })
  async findId(
    @Body() body: FindEmailDto,
    @Query('isFull', ParseBoolPipe) isFull: boolean,
  ): Promise<{
    message: string;
  }> {
    return this.userService.findId(body, isFull);
  }

  @ApiOperation({
    summary: '비밀번호 찾기',
  })
  @Post('pw')
  async findPassword(@Body() body: FindPasswordDto): Promise<{
    message: string;
  }> {
    return this.userService.findPassword(body);
  }
}
