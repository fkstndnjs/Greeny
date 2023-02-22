import { BaseEntity } from 'src/common/entity/baseEntity';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { User } from 'src/user/entities/user.entity';
export declare class UserBookmarkDailyLook extends BaseEntity {
    user: User;
    dailyLook: DailyLook;
}
