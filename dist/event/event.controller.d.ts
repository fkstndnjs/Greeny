/// <reference types="multer" />
import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateEventDto } from './dto/createEvent.dto';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    createEvent(body: CreateEventDto, files: {
        thumbnail: Express.Multer.File[];
        mainThumbnail: Express.Multer.File[];
    }): Promise<void>;
    getEvents(pagination: PaginationDto): Promise<import("../common/dto/pagination.dto").Pagination<{
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
