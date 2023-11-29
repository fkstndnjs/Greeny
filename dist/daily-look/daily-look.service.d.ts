/// <reference types="multer" />
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
import { DailyLookTag } from './entities/dailyLookTag.entity';
import { CreateDailyLookCommentDto } from 'src/daily-look/dto/createDailyLookComment.dto';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';
export declare class DailyLookService {
    private dailyLookRepository;
    private dailyLookTagRepository;
    private userBookmarkDailyLookRepository;
    private userLikeDailyLookRepository;
    private dailyLookCommentRepository;
    private awsService;
    private dataSource;
    constructor(dailyLookRepository: Repository<DailyLook>, dailyLookTagRepository: Repository<DailyLookTag>, userBookmarkDailyLookRepository: Repository<UserBookmarkDailyLook>, userLikeDailyLookRepository: Repository<UserLikeDailyLook>, dailyLookCommentRepository: Repository<DailyLookComment>, awsService: AwsService, dataSource: DataSource);
    create(user: User, file: Express.Multer.File, body: CreateDailyLookDto): Promise<void>;
    getAll(user: User, pagination: PaginationDto): Promise<Pagination<{
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
        userBookmarkDailyLook: UserBookmarkDailyLook[];
        userLikeDailyLook: UserLikeDailyLook[];
        dailyLookComment: DailyLookComment[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>>;
    getOne(idDailyLook: number, user: User): Promise<DailyLook>;
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
