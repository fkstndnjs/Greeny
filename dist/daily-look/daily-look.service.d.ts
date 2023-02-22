/// <reference types="multer" />
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
import { DailyLookTag } from './entities/dailyLookTag.entity';
export declare class DailyLookService {
    private dailyLookRepository;
    private dailyLookTagRepository;
    private dataSource;
    private awsService;
    constructor(dailyLookRepository: Repository<DailyLook>, dailyLookTagRepository: Repository<DailyLookTag>, dataSource: DataSource, awsService: AwsService);
    create(file: Express.Multer.File, body: CreateDailyLookDto): Promise<void>;
    getAll(pagination: PaginationDto): Promise<Pagination<{
        imgUrl: string;
        title: string;
        text: string;
        likeCount: number;
        bookmarkCount: number;
        dailyLookTag: DailyLookTag;
        user: import("../user/entities/user.entity").User;
        userBookmarkDailyLook: import("./entities/userBookmarkDailyLook.entity").UserBookmarkDailyLook[];
        userLikeDailyLook: import("./entities/userLikeDailyLook.entity").UserLikeDailyLook[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>>;
    getOne(idDailyLook: number): Promise<DailyLook>;
    createTag(body: CreateDailyLookTagDto): Promise<void>;
    getAllTag(): Promise<{
        dailyLookTags: DailyLookTag[];
    }>;
}
