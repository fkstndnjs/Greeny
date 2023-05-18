import { BaseEntity } from 'src/common/entity/baseEntity';
import { Magazine } from 'src/magazine/entities/magazine.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('subMagazine')
export class SubMagazine extends BaseEntity {
  @Column({
    length: 255,
  })
  title: string;

  @Column({
    length: 255,
  })
  imgUrl: string;

  @Column({
    length: 255,
  })
  text: string;

  @ManyToOne(() => Magazine, (Magazine) => Magazine.subMagazine)
  magazine: Magazine;
}
