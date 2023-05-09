import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('dailyLookComment')
export class DailyLookComment extends BaseEntity {
  @ApiProperty({
    example: '댓글입니다',
  })
  @Column({
    type: 'text',
  })
  comment: string;

  @ApiProperty({
    example: '1',
  })
  @ManyToOne(() => User, (User) => User.dailyLookComment)
  user: User;

  @ApiProperty({
    example: '1',
  })
  @ManyToOne(() => DailyLook, (DailyLook) => DailyLook.dailyLookComment)
  dailyLook: DailyLook;
}
