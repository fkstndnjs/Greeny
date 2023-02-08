import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DailyLookTag } from './dailyLookTag.entity';

@Entity('dailyLook')
export class DailyLook extends BaseEntity {
  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  imgUrl: string;

  @ApiProperty({
    example: '제목',
  })
  @Column({
    length: 100,
  })
  title: string;

  @ApiProperty({
    example: '본문 내용',
  })
  @Column({
    length: 255,
  })
  text: string;

  @ApiProperty({
    example: 1,
  })
  @ManyToOne(() => DailyLookTag)
  dailyLookTag: DailyLookTag;
}
