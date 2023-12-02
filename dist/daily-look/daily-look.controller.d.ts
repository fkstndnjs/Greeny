/// <reference types="multer" />
import { DailyLookTag } from 'src/daily-look/entities/dailyLookTag.entity';
import { User } from 'src/user/entities/user.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { DailyLookService } from './daily-look.service';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
import { CreateDailyLookCommentDto } from 'src/daily-look/dto/createDailyLookComment.dto';
export declare class DailyLookController {
    private readonly dailyLookService;
    constructor(dailyLookService: DailyLookService);
    create(user: User, file: Express.Multer.File, body: CreateDailyLookDto): Promise<void>;
    getAll(user: User, pagination: PaginationDto): Promise<import("../common/dto/pagination.dto").Pagination<{
        imgUrl: string;
        likes: any;
        isUserLiked: boolean;
        isUserBookmarked: boolean;
        title: string;
        text: string;
        likeCount: number;
        bookmarkCount: number;
        dailyLookTag: DailyLookTag;
        user: User;
        userBookmarkDailyLook: import("./entities/userBookmarkDailyLook.entity").UserBookmarkDailyLook[];
        userLikeDailyLook: import("./entities/userLikeDailyLook.entity").UserLikeDailyLook[];
        dailyLookComment: import("./entities/dailyLookComment.entity").DailyLookComment[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>>;
    getOne(user: User, idDailyLook: number): Promise<DailyLook>;
    delete(idDailyLook: number): Promise<void>;
    createTag(body: CreateDailyLookTagDto): Promise<void>;
    getAllTag(): Promise<{
        dailyLookTags: DailyLookTag[];
    }>;
    addLike(user: User, idDailyLook: number): Promise<void>;
    removeLike(user: User, idDailyLook: number): Promise<void>;
    bookmark(user: User, idDailyLook: number): Promise<void>;
    removeBookmark(user: User, idDailyLook: number): Promise<void>;
    createComment(user: User, idDailyLook: number, body: CreateDailyLookCommentDto): Promise<void>;
    updateComment(user: User, idDailyLookComment: number, body: CreateDailyLookCommentDto): Promise<void>;
    deleteComment(user: User, idDailyLookComment: number): Promise<void>;
}
