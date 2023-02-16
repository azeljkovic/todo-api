import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service.js';

import {
  ResponseInterface,
  TodoArrayInterface,
  TodoInterface,
} from './interfaces/lowdb.interface';
import { TodoDto } from './dto/todo.dto';

@Controller('lowdb')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getAllTodos(): Promise<TodoArrayInterface> {
  //   return this.appService.getAllTodos();
  // }

  // @Get(':id')
  // getTodo(@Param() params): Promise<TodoInterface | string> {
  //   return this.appService.getTodo(params.id);
  // }

  @Post()
  postTodo(@Body() todoDto: TodoDto): Promise<ResponseInterface> {
    return this.appService.postTodo(todoDto);
  }

  // @Patch(':id')
  // editTodo(
  //   @Param() params,
  //   @Body() todoDto: TodoDto,
  // ): Promise<ResponseInterface> {
  //   return this.appService.editTodo(params.id, todoDto);
  // }
}
