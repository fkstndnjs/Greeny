import { ApiProperty } from '@nestjs/swagger';

export class GetEventSuccessResponseDto {
  @ApiProperty({
    example: {},
  })
  events: {};
}
