import { BaseEntity } from 'src/common/entity/baseEntity';
import { SubMagazine } from 'src/magazine/entities/subMagazine.entity';
export declare class Magazine extends BaseEntity {
    thumbnail: string;
    title: string;
    subtitle: string;
    subMagazine: SubMagazine[];
}
