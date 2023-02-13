import { ApiProperty, PickType } from '@nestjs/swagger';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';

export class GetAllDailyLookResponseDto extends PickType(DailyLook, [
  'createdAt',
  'updatedAt',
  'id',
  'imgUrl',
  'title',
  'text',
]) {
  @ApiProperty({
    example: {
      id: '1',
      name: '실천인증',
    },
  })
  dailyLookTag: {
    id: '1';
    name: '실천인증';
  };

  @ApiProperty({
    example: {
      id: '1',
      nickname: '죠르디',
    },
  })
  user: {
    id: '1';
    nickname: '죠르디';
  };
}
