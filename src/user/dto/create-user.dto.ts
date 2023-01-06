import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, {
    message: '최소 2글자 이상 작성해주세요',
  })
  @MaxLength(10, {
    message: '최대 10글자까지 가능합니다',
  })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10, {
    message: '최소 10글자 이상 작성해주세요',
  })
  @MaxLength(16, {
    message: '최대 16글자까지 가능합니다',
  })
  password: string;

  @IsString()
  @MinLength(1, {
    message: '최소 1글자 이상 작성해주세요',
  })
  @MaxLength(10, {
    message: '최대 10글자까지 가능합니다',
  })
  nickname: string;
}
