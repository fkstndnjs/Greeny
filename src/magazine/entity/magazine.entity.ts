import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { User } from '../../user/entities/user.entity';
import { MagazineArticle } from './magazineArticle.entity';

@Entity('magazine')
export class Magazine extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column({
    length: 255,
  })
  imgUrl: string;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    length: 255,
  })
  description: string;

  @ManyToOne(() => User, (user) => user.magazine)
  user: User;

  @OneToMany(
    () => MagazineArticle,
    (magazineArticle) => magazineArticle.magazine,
  )
  magazineArticle: MagazineArticle[];
}
