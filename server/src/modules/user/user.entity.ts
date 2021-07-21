import { BaseEntity } from 'src/common/database';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  avatar: string;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  active: boolean;
}
