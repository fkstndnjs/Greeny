import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/baseEntity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

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
    length: 100,
  })
  password: string;

  @Column({ length: 60 })
  signupVerifyToken: string;
}
