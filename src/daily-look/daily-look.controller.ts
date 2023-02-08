import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DailyLookService } from './daily-look.service';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';

@ApiTags('데일리룩')
@Controller('daily-look')
export class DailyLookController {
  constructor(private readonly dailyLookService: DailyLookService) {}

  @Post()
  async create(@Body() body: CreateDailyLookDto) {
    await this.dailyLookService.create(body);
  }
}
