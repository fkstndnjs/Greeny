/// <reference types="multer" />
import { DailyLookTag } from 'src/daily-look/entities/dailyLookTag.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { DailyLookService } from './daily-look.service';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
export declare class DailyLookController {
    private readonly dailyLookService;
    constructor(dailyLookService: DailyLookService);
    create(file: Express.Multer.File, body: CreateDailyLookDto): Promise<void>;
    getAll(pagination: PaginationDto): Promise<import("../common/dto/pagination.dto").Pagination<{
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
