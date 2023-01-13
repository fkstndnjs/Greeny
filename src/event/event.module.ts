import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventWay } from './entites/eventWay.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventWay])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
