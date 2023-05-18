import { BaseEntity } from 'src/common/entity/baseEntity';
import { SubMagazine } from 'src/magazine/entities/subMagazine.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @OneToMany(
    () => SubMagazine,
    (SubMagazine) => {
      SubMagazine.magazine;
    },
  )
  subMagazine: SubMagazine[];
}
