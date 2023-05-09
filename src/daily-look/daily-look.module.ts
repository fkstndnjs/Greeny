import { Module } from '@nestjs/common';
import { DailyLookService } from './daily-look.service';
import { DailyLookController } from './daily-look.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyLook } from './entities/dailyLook.entity';
import { DailyLookTag } from './entities/dailyLookTag.entity';
import { AwsModule } from '../aws/aws.module';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserBookmarkDailyLook,
      DailyLookTag,
      DailyLook,
      UserLikeDailyLook,
      DailyLookComment,
    ]),
    AwsModule,
  ],
  controllers: [DailyLookController],
  providers: [DailyLookService],
})
export class DailyLookModule {}
