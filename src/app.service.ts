import { Inject, Injectable } from '@nestjs/common';
import { ResponseInterface } from './interfaces/lowdb.interface';
import { TodoRepository } from './repositories/todo.repository';
import { TodoDto } from './dto/todo.dto';
// import { Lowdb } from './lowdb';

const ID_NOT_FOUND_MESSAGE = 'TODO with the provided ID not found';
const SUCCESS_MESSAGE = 'TODO added successfully';

@Injectable()
export class AppService {
  @Inject(TodoRepository) private readonly todoRepository: TodoRepository;

  // async getAllTodos(): Promise<TodoArrayInterface> {
  //   return Lowdb.readData();
  // }

  // async getTodo(id): Promise<TodoInterface | string> {
  //   const dbData = await Lowdb.readData();
  //   const found = dbData.posts.find((element) => element.id === id);
  //
  //   if (!found) {
  //     throw new NotFoundException(ID_NOT_FOUND_MESSAGE);
  //   }
  //
  //   return found;
  // }

  async postTodo(body: TodoDto): Promise<ResponseInterface> {
    // const newData = { id: randomUUID(), text: body.todo };
    // await Lowdb.writeData(newData);

    const todo = this.todoRepository.create({
      todo: body.todo,
    });

    await this.todoRepository.save(todo);

    return { status: 201, message: SUCCESS_MESSAGE };
  }

  // async editTodo(id: string, body: TodoDto): Promise<ResponseInterface> {
  //   const result = await Lowdb.editData(id, body.todo);
  //
  //   if (!result) {
  //     throw new NotFoundException(ID_NOT_FOUND_MESSAGE);
  //   }
  //
  //   return { status: 200, message: SUCCESS_MESSAGE };
  // }
}
