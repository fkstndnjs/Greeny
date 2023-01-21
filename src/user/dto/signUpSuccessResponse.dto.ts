import { ApiProperty } from '@nestjs/swagger';

export class SignUpSuccessResponseDto {
  @ApiProperty({
    example: 'fkstndnjs@naver.com',
  })
  email: string;
}
