import { PickType } from '@nestjs/swagger';
import { DailyLookTag } from '../entities/dailyLookTag.entity';

export class CreateDailyLookTagDto extends PickType(DailyLookTag, [
  'name',
] as const) {}
