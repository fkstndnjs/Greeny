import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity('magazine')
export class Magazine extends BaseEntity {
  @Column({
    length: 255,
  })
  thumbnail: string;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    length: 255,
  })
  subtitle: string;
}
