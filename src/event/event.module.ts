import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsModule } from '../aws/aws.module';
import { Event } from './entites/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), AwsModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
