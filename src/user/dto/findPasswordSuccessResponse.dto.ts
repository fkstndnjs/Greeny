import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class FindPasswordSuccessResponseDto {
  @ApiProperty({
    example: '회원님의 이메일로 비밀번호가 전송되었습니다.',
  })
  message: string;
}
