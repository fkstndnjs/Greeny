import { ApiProperty, PickType } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { Event } from '../entites/event.entity';

export class CreateDto extends PickType(Event, [
  'startDate',
  'endDate',
  'title',
] as const) {
  @ApiProperty({
    type: String,
    example: 'true',
    description: '원래는 boolean 타입인데 여기서만 string으로 줘야함',
  })
  @Transform(
    ({ obj }) => {
      return obj.status === 'true';
    },
    { toClassOnly: true },
  )
  status: boolean;
}
