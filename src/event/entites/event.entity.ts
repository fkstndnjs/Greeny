import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { EventWay } from './eventWay.entity';

@Entity('event')
export class Event extends BaseEntity {
  @Column({
    length: 255,
  })
  thumbnail: string;

  @Column({
    length: 255,
  })
  mainThumbnail: string;

  @Column({
    default: false,
  })
  status: boolean;

  @OneToMany(() => EventWay, (EventWay) => EventWay.event)
  eventWay: EventWay[];
}
