import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';
import { Challenge } from 'src/challenge/entities/challenge.entity';

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
    nullable: true,
  })
  thumbnail: string;

  @Column({
    length: 100,
    nullable: true,
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

  @OneToMany(
    () => DailyLookComment,
    (DailyLookComment) => DailyLookComment.user,
  )
  dailyLookComment: DailyLookComment[];

  @OneToMany(() => Challenge, (Challenge) => Challenge.user)
  challenge: Challenge[];
}
