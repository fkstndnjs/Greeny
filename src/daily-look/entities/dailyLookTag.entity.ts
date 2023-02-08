import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('dailyLookTag')
export class DailyLookTag extends BaseEntity {
  @ApiProperty({
    example: '실천인증',
  })
  @Column({
    unique: true,
    length: 50,
  })
  name: string;
}
