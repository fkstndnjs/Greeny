import { BaseEntity } from 'src/common/entity/baseEntity';
import { User } from 'src/user/entities/user.entity';
export declare class Challenge extends BaseEntity {
    thumbnail: string;
    title: string;
    subtitle: string;
    text: string;
    likeCount: number;
    bookmarkCount: number;
    user: User;
}
