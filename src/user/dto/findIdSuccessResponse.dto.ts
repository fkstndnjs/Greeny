import { ApiProperty } from '@nestjs/swagger';

export class FindIdSuccessResponseDto {
  @ApiProperty({
    example: '회원님의 아이디는 fkst****입니다',
  })
  message: string;
}
