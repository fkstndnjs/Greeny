import { Module } from '@nestjs/common';
import { DailylookService } from './dailylook.service';
import { DailylookController } from './dailylook.controller';

@Module({
  controllers: [DailylookController],
  providers: [DailylookService]
})
export class DailylookModule {}
