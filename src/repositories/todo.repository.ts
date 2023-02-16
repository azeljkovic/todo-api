import { DataSource, Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoRepository extends Repository<TodoEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(TodoEntity, dataSource.createEntityManager());
  }
}
