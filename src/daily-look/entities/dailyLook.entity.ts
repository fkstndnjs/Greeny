import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity('dailyLook')
export class DailyLook extends BaseEntity {
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
  text: string;
}
