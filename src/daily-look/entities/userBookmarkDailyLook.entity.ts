import { BaseEntity } from 'src/common/entity/baseEntity';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity('userBookmarkDailyLook')
export class UserBookmarkDailyLook extends BaseEntity {
  @ManyToOne(() => User, (User) => User.userBookmarkDailyLook)
  user: User;

  @ManyToOne(() => DailyLook)
  dailyLook: DailyLook;
}
