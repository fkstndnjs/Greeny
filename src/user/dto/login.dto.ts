import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: '아이디', example: 'fkstndnjs' })
  @IsString()
  userId: string;

  @ApiProperty({ description: '비밀번호', example: 'password123' })
  @IsString()
  password: string;
}
