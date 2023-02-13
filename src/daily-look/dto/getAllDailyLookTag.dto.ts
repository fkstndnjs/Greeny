import { ApiProperty } from '@nestjs/swagger';
import { DailyLookTag } from 'src/daily-look/entities/dailyLookTag.entity';

export class GetAllDailyLookTagResponseDto {
  @ApiProperty({
    example: [
      {
        name: '실천인증1',
      },
      {
        name: '실천인증2',
      },
      {
        name: '실천인증3',
      },
    ],
  })
  dailyLookTags: DailyLookTag[];
}
