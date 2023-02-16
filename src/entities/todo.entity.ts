import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column('boolean', { default: false })
  isDone = false;
}
