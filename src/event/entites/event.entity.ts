import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { EventWay } from './eventWay.entity';

@Entity('event')
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    length: 255,
  })
  thumbnail: string;

  @Column({
    length: 255,
  })
  mainThumbnail: string;

  @OneToMany(() => EventWay, (EventWay) => EventWay.event)
  eventWay: EventWay[];
}
