import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
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
    private awsService: AwsService,
  ) {}

  async createEvent(
    body: CreateEventDto,
    files: {
      thumbnail: Express.Multer.File[];
      mainThumbnail: Express.Multer.File[];
    },
  ) {
    this.dataSource.transaction(async (manager) => {
      const event = new Event();

      const { thumbnailKey, mainThumbnailKey } =
        await this.awsService.uploadEventToS3(files);

      event.thumbnail = thumbnailKey;
      event.mainThumbnail = mainThumbnailKey;
      const createdEvent = await manager.save(event);

      await Promise.all(
        body.eventWay.map(async (way) => {
          const eventWay = new EventWay();

          eventWay.order = way.order;
          eventWay.text = way.text;
          eventWay.event = createdEvent;
          await manager.save(eventWay);
        }),
      );
    });
  }
}
