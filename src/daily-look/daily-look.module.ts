import { Module } from '@nestjs/common';
import { DailyLookService } from './daily-look.service';
import { DailyLookController } from './daily-look.controller';

@Module({
  controllers: [DailyLookController],
  providers: [DailyLookService]
})
export class DailyLookModule {}
