import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('dailyLookTag')
export class DailyLookTag extends BaseEntity {
  @ApiProperty({
    example: '실천인증',
  })
  @Column({
    type: 'varchar',
    length: 50,
  })
  @IsString()
  name: string;

  @OneToMany(() => DailyLook, (DailyLook) => DailyLook.dailyLookTag)
  dailyLook: DailyLook[];
}
