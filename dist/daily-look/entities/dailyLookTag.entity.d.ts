import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { BaseEntity } from '../../common/entity/baseEntity';
export declare class DailyLookTag extends BaseEntity {
    name: string;
    dailyLook: DailyLook[];
}
