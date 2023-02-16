import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';

import { ResponseInterface } from './interfaces/lowdb.interface';
import { TodoDto } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';

@Controller('lowdb')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos(): Promise<TodoEntity[]> {
    return this.appService.getAllTodos();
  }

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
