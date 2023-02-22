/// <reference types="multer" />
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
import { CreateEventDto } from './dto/createEvent.dto';
import { Event } from './entites/event.entity';
export declare class EventService {
    private eventRepository;
    private dataSource;
    private awsService;
    constructor(eventRepository: Repository<Event>, dataSource: DataSource, awsService: AwsService);
    createEvent(body: CreateEventDto, files: {
        thumbnail: Express.Multer.File[];
        mainThumbnail: Express.Multer.File[];
    }): Promise<void>;
    getEvents(pagination: PaginationDto): Promise<Pagination<{
        thumbnail: string;
        mainThumbnail: string;
        title: string;
        status: boolean;
        startDate: Date;
        endDate: Date;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>>;
}
