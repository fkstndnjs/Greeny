import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { Magazine } from 'src/magazine/entities/magazine.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('subMagazine')
export class SubMagazine extends BaseEntity {
  @ApiProperty({
    example: '제목',
  })
  @Column({
    length: 255,
  })
  title: string;

  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
  })
  @Column({
    length: 255,
  })
  imgUrl: string;

  @ApiProperty({
    example: '본문',
  })
  @Column({
    length: 255,
  })
  text: string;

  @ApiProperty({
    example: '1',
  })
  @ManyToOne(() => Magazine, (Magazine) => Magazine.subMagazine)
  magazine: Magazine;
}
