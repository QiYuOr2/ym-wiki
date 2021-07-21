import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default abstract class BaseEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
    default: 'now()',
    nullable: false,
    update: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
    default: 'now()',
    nullable: false,
    onUpdate: 'now()',
  })
  updatedAt: Date;
}
