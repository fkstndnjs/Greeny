import { ApiProperty } from '@nestjs/swagger';

export class FindIdSuccessResponseDto2 {
  @ApiProperty({
    example: '회원님의 이메일로 아이디가 전송되었습니다',
  })
  message: string;
}
