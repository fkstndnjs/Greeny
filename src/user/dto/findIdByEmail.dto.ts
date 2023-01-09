import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class FindEmailDto {
  @ApiProperty({ description: '이름', example: '유석현' })
  @IsString()
  name: string;

  @ApiProperty({ description: '이메일', example: 'fkstndnjs@naver.com' })
  @IsEmail(
    {},
    {
      message: '이메일 항목이 이메일 형식이 아닙니다',
    },
  )
  email: string;
}
