import { BaseEntity } from 'src/common/entity/baseEntity';
import { Magazine } from 'src/magazine/entities/magazine.entity';
export declare class SubMagazine extends BaseEntity {
    title: string;
    imgUrl: string;
    text: string;
    magazine: Magazine;
}
