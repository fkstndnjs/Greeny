import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateEventDto } from './dto/createEvent.dto';
import { Event } from './entites/event.entity';
import { EventWay } from './entites/eventWay.entity';

@Injectable()
export class EventService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(EventWay)
    private eventWayRepository: Repository<EventWay>,
  ) {}

  async createEvent(body: CreateEventDto) {
    this.dataSource.transaction(async (manager) => {
      const event = new Event();
      const eventWay = new EventWay();

      event.thumbnail = body.thumbnail;
      event.mainThumbnail = body.mainThumbnail;
      const createdEvent = await manager.save(event);

      eventWay.order = body.eventWay.order;
      eventWay.text = body.eventWay.text;
      eventWay.event = createdEvent;

      await manager.save(eventWay);
    });
  }
}
