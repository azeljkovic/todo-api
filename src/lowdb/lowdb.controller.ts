import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { LowdbService } from './lowdb.service.js';
import {
  TodoArrayInterface,
  TodoInterface,
} from './interfaces/lowdb.interface.js';

@Controller('lowdb')
export class LowdbController {
  constructor(private readonly lowdbService: LowdbService) {}

  @Get()
  getAllTodos(): Promise<TodoArrayInterface> {
    return this.lowdbService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param() params): Promise<TodoInterface | string> {
    return this.lowdbService.getTodo(params.id);
  }

  @Post()
  postTodo(@Req() request: Request): Promise<string> {
    return this.lowdbService.postTodo(request.body);
  }
}
