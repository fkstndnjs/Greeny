import { BaseEntity } from '../../common/entity/baseEntity';
export declare class Event extends BaseEntity {
    title: string;
    thumbnail: string;
    mainThumbnail: string;
    status: boolean;
    startDate: Date;
    endDate: Date;
}
