import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { SubMagazine } from 'src/magazine/entities/subMagazine.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('magazine')
export class Magazine extends BaseEntity {
  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  thumbnail: string;

  @ApiProperty({
    example: '제목',
  })
  @Column({
    length: 255,
  })
  title: string;

  @ApiProperty({
    example: '부제목',
  })
  @Column({
    length: 255,
  })
  subtitle: string;

  @OneToMany(() => SubMagazine, (subMagazine) => subMagazine.magazine)
  subMagazine: SubMagazine[];
}
