import { PickType } from '@nestjs/swagger';
import { DailyLook } from '../entities/dailyLook.entity';

export class CreateDailyLookDto extends PickType(DailyLook, [
  'imgUrl',
  'text',
  'title',
  'dailyLookTag',
] as const) {}
