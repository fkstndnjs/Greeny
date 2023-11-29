import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { BaseEntity } from '../../common/entity/baseEntity';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';
import { Challenge } from 'src/challenge/entities/challenge.entity';
export declare class User extends BaseEntity {
    name: string;
    nickname: string;
    email: string;
    userId: string;
    password: string;
    thumbnail: string;
    role: string;
    dailyLook: DailyLook[];
    userBookmarkDailyLook: UserBookmarkDailyLook[];
    userLikeDailyLook: UserLikeDailyLook[];
    dailyLookComment: DailyLookComment[];
    challenge: Challenge[];
}
