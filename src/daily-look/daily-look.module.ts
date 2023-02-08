import { Module } from '@nestjs/common';
import { DailyLookService } from './daily-look.service';
import { DailyLookController } from './daily-look.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyLook } from './entities/dailyLook.entity';
import { DailyLookTag } from './entities/dailyLookTag.entity';
import { AwsModule } from '../aws/aws.module';

@Module({
  imports: [TypeOrmModule.forFeature([DailyLook, DailyLookTag, AwsModule])],
  controllers: [DailyLookController],
  providers: [DailyLookService],
})
export class DailyLookModule {}
