import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ResponseInterface } from './interfaces/lowdb.interface';
import { TodoRepository } from './repositories/todo.repository';
import { TodoDto } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';

const ID_NOT_FOUND_MESSAGE = 'TODO with the provided ID not found';
const ADD_SUCCESS_MESSAGE = 'TODO added successfully';
const UPDATE_SUCCESS_MESSAGE = 'TODO updated successfully';

@Injectable()
export class AppService {
  @Inject(TodoRepository) private readonly todoRepository: TodoRepository;

  async getAllTodos(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async getTodo(id): Promise<TodoEntity> {
    const found = await this.todoRepository.findOneBy({
      id: id,
    });

    if (!found) {
      throw new NotFoundException(ID_NOT_FOUND_MESSAGE);
    }

    return found;
  }

  async postTodo(body: TodoDto): Promise<ResponseInterface> {
    const todo = this.todoRepository.create({
      todo: body.todo,
    });

    await this.todoRepository.save(todo);

    return { status: 201, message: ADD_SUCCESS_MESSAGE };
  }

  async editTodo(id: number, body: TodoDto): Promise<ResponseInterface> {
    const result = await this.todoRepository.findOneBy({
      id: id,
    });

    if (!result) {
      throw new NotFoundException(ID_NOT_FOUND_MESSAGE);
    }

    result.todo = body.todo;
    await this.todoRepository.save(result);

    return { status: 200, message: UPDATE_SUCCESS_MESSAGE };
  }
}
