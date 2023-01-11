import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';
import { Magazine } from '../../magazine/entity/magazine.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: bigint;

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
    length: 100,
  })
  role: string;

  @OneToMany(() => Magazine, (magazine) => magazine.user)
  magazine: Magazine[];
}
