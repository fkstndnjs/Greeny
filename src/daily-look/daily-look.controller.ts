import { Controller, Post } from '@nestjs/common';
import { DailyLookService } from './daily-look.service';

@Controller('daily-look')
export class DailyLookController {
  constructor(private readonly dailyLookService: DailyLookService) {}
}
