import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { DailyLookTag } from './dailyLookTag.entity';
import { DailyLookComment } from 'src/daily-look/entities/dailyLookComment.entity';

@Entity('dailyLook')
export class DailyLook extends BaseEntity {
  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  @IsString()
  imgUrl: string;

  @ApiProperty({
    example: '제목',
  })
  @Column({
    length: 100,
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '본문 내용',
  })
  @Column({
    length: 255,
  })
  @IsString()
  text: string;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  likeCount: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  bookmarkCount: number;

  @ApiProperty({
    example: '1',
  })
  @ManyToOne(() => DailyLookTag, (DailyLookTag) => DailyLookTag.dailyLook)
  dailyLookTag: DailyLookTag;

  @ApiProperty({
    example: '1',
  })
  @ManyToOne(() => User, (User) => User.dailyLook)
  user: User;

  @OneToMany(
    () => UserBookmarkDailyLook,
    (UserBookmarkDailyLook) => UserBookmarkDailyLook.dailyLook,
  )
  userBookmarkDailyLook: UserBookmarkDailyLook[];

  @OneToMany(
    () => UserLikeDailyLook,
    (UserLikeDailyLook) => UserLikeDailyLook.dailyLook,
  )
  userLikeDailyLook: UserLikeDailyLook[];

  @OneToMany(
    () => DailyLookComment,
    (DailyLookComment) => DailyLookComment.dailyLook,
  )
  dailyLookComment: DailyLookComment[];
}
