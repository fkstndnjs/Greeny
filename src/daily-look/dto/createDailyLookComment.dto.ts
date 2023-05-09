import { ApiProperty, PickType } from '@nestjs/swagger';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';

export class CreateDailyLookCommentDto extends PickType(DailyLookComment, [
  'comment',
] as const) {}
