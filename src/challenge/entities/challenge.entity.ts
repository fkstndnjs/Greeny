import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('challenge')
export class Challenge extends BaseEntity {
  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  @IsString()
  thumbnail: string;

  @ApiProperty({
    example: '제목',
  })
  @Column({
    length: 100,
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '부제목',
  })
  @Column({
    length: 100,
  })
  @IsString()
  subtitle: string;

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
  @ManyToOne(() => User, (User) => User.dailyLook)
  user: User;
}
