import { Injectable } from '@nestjs/common';
import {
  TodoArrayInterface,
  TodoInterface,
} from './interfaces/lowdb.interface.js';
import { randomUUID } from 'node:crypto';
import { TodoDto } from './dto/todo.dto.js';
import { Lowdb } from './lowdb.js';

@Injectable()
export class LowdbService {
  async getAllTodos(): Promise<TodoArrayInterface> {
    return Lowdb.readData();
  }

  async getTodo(id): Promise<TodoInterface | string> {
    const dbData = await Lowdb.readData();
    const found = dbData.posts.find((element) => element.id === id);

    return found ?? 'nothing found';
  }

  async postTodo(body: TodoDto): Promise<string> {
    const newData = { id: randomUUID(), text: body.todo };
    await Lowdb.writeData(newData);

    return 'todo posted';
  }

  async editTodo(id: string, body: TodoDto): Promise<string> {
    const result = await Lowdb.editData(id, body.todo);

    if (result) {
      return 'todo edited';
    } else {
      return 'id not found';
    }
  }
}
