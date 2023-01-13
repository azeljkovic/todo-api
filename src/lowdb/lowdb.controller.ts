import { Controller, Get, Post, Req } from '@nestjs/common';
import { LowdbService } from './lowdb.service.js';
import { TodoInterface } from './interfaces/lowdb.interface.js';

@Controller('lowdb')
export class LowdbController {
  constructor(private readonly lowdbService: LowdbService) {}

  @Get()
  getAllTodos(): Promise<TodoInterface> {
    return this.lowdbService.getAllTodos();
  }

  // @Get()
  // getTodo(): Promise<TodoInterface> {
  //   return this.lowdbService.getTodo();
  // }

  @Post()
  postTodo(@Req() request: Request): Promise<string> {
    return this.lowdbService.postTodo(request.body);
  }
}
