import { BaseEntity } from 'src/common/entity/baseEntity';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { User } from 'src/user/entities/user.entity';
export declare class DailyLookComment extends BaseEntity {
    comment: string;
    user: User;
    dailyLook: DailyLook;
}
