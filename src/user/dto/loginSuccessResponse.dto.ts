import { ApiProperty } from '@nestjs/swagger';

export class LoginSuccessResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2NzQyNzc5NTQsImV4cCI6MTY3NDI3ODAxNH0.1--Dw5z9AlMvG4p9x35EedkmEILwHeVESxHcFF09-UA',
  })
  token: string;
}
