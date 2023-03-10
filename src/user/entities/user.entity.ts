import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('user')
export class User extends BaseEntity {
  @Column({
    length: 30,
  })
  name: string;

  @Column({
    length: 30,
  })
  nickname: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 20,
  })
  userId: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column({
    length: 255,
  })
  thumbnail: string;

  @Column({
    length: 100,
  })
  role: string;

  @OneToMany(() => DailyLook, (DailyLook) => DailyLook.user)
  dailyLook: DailyLook[];

  @OneToMany(
    () => UserBookmarkDailyLook,
    (UserBookmarkDailyLook) => UserBookmarkDailyLook.user,
  )
  userBookmarkDailyLook: UserBookmarkDailyLook[];

  @OneToMany(
    () => UserLikeDailyLook,
    (UserLikeDailyLook) => UserLikeDailyLook.user,
  )
  userLikeDailyLook: UserLikeDailyLook[];
}
