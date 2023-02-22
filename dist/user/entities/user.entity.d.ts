import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { BaseEntity } from '../../common/entity/baseEntity';
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
}
