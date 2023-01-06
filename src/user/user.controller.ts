import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async createUser(@Body() body: CreateUserDto): Promise<{
    message: string;
  }> {
    return this.userService.createUser(body);
  }

  @Post('login')
  async login(@Body() body: LoginDto): Promise<{
    token: string;
  }> {
    return this.userService.login(body);
  }
}
