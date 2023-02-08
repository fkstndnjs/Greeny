import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('dailyLookTag')
export class DailyLookTag extends BaseEntity {
  @Column({
    length: 50,
  })
  name: string;
}
