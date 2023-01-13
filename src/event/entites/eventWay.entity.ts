import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { Event } from './event.entity';

@Entity('eventWay')
export class EventWay extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  order: number;

  @Column({
    length: 255,
  })
  text: string;

  @ManyToOne(() => Event, (event) => event.eventWay)
  event: Event;
}
