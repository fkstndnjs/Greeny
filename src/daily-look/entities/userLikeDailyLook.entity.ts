import { BaseEntity } from 'src/common/entity/baseEntity';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity('userLikeDailyLook')
export class UserLikeDailyLook extends BaseEntity {
  @ManyToOne(() => User, (User) => User.userLikeDailyLook)
  user: User;

  @ManyToOne(() => DailyLook)
  dailyLook: DailyLook;
}
