import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
import { CreateDto } from './dto/create.dto';
import { Event } from './entites/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    private dataSource: DataSource,
    private awsService: AwsService,
  ) {}

  async createEvent(
    body: CreateDto,
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
      event.status = body.status;
      event.startDate = body.startDate;
      event.endDate = body.endDate;
      event.title = body.title;

      await manager.save(event);
    });
  }

  async getEvents(pagination: PaginationDto) {
    const [events, total] = await this.eventRepository
      .createQueryBuilder('event')
      .orderBy('event.createdAt', 'DESC')
      .skip(pagination.getOffset())
      .take(pagination.getLimit())
      .getManyAndCount();

    const items = events.map((event) => {
      return {
        ...event,
        thumbnail: this.awsService.getAwsS3FileUrl(event.thumbnail),
        mainThumbnail: this.awsService.getAwsS3FileUrl(event.mainThumbnail),
      };
    });

    return new Pagination(total, pagination.getLimit(), pagination.page, items);
  }
}
