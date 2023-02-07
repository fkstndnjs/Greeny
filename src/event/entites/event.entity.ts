import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('event')
export class Event extends BaseEntity {
  @ApiProperty({
    example: 'event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  thumbnail: string;

  @ApiProperty({
    example: 'event/1675752939340/main_sample.png',
  })
  @Column({
    length: 255,
  })
  mainThumbnail: string;

  @ApiProperty({
    type: Boolean,
    example: true,
  })
  @Column({
    default: false,
  })
  status: boolean;

  @ApiProperty({
    type: Date,
    example: '2023-01-01',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  startDate: Date;

  @ApiProperty({
    type: Date,
    example: '2023-12-31',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  endDate: Date;
}
