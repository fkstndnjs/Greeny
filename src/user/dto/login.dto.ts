import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;
}
