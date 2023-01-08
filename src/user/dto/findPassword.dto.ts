import { IsDefined, IsEmail, IsString } from 'class-validator';

export class FindPasswordDto {
  @IsString()
  name: string;

  @IsEmail(
    {},
    {
      message: '이메일 항목이 이메일 형식이 아닙니다',
    },
  )
  email: string;

  @IsString()
  userId: string;
}
