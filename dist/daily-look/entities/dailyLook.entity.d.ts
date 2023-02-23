import { BaseEntity } from 'src/common/entity/baseEntity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { DailyLookTag } from './dailyLookTag.entity';
export declare class DailyLook extends BaseEntity {
    imgUrl: string;
    title: string;
    text: string;
    likeCount: number;
    bookmarkCount: number;
    dailyLookTag: DailyLookTag;
    user: User;
    userBookmarkDailyLook: UserBookmarkDailyLook[];
    userLikeDailyLook: UserLikeDailyLook[];
}
