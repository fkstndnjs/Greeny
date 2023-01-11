import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { Magazine } from './magazine.entity';

@Entity('magazine_article')
export class MagazineArticle extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: bigint;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    length: 255,
  })
  imgUrl: string;

  @Column({
    type: 'text',
  })
  text: string;

  @ManyToOne(() => Magazine, (magazine) => magazine.magazineArticle)
  magazine: Magazine;
}
