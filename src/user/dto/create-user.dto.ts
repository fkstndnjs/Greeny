import {
  IsDefined,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, {
    message: '이름은 최소 2글자 이상 작성해주세요',
  })
  @MaxLength(10, {
    message: '이름은 최대 10글자까지 가능합니다',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: '이메일 항목이 이메일 형식이 아닙니다',
    },
  )
  email: string;

  @IsString()
  @MinLength(1, {
    message: '아이디는 최소 1글자 이상 작성해주세요',
  })
  @MaxLength(20, {
    message: '아이디는 최대 20글자까지 가능합니다',
  })
  userId: string;

  @IsString()
  @MinLength(10, {
    message: '비밀번호는 최소 10글자 이상 작성해주세요',
  })
  @MaxLength(16, {
    message: '비밀번호는 최대 16글자까지 가능합니다',
  })
  password: string;

  @IsString()
  @MinLength(1, {
    message: '닉네임은 최소 1글자 이상 작성해주세요',
  })
  @MaxLength(10, {
    message: '닉네임은 최대 10글자까지 가능합니다',
  })
  nickname: string;
}
