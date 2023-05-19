import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('event')
export class Event extends BaseEntity {
  @ApiProperty({
    example: '그리니 챌린지 이벤트',
  })
  @Column({
    length: 255,
  })
  title: string;

  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  thumbnail: string;

  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
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
