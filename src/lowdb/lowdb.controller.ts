import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LowdbService } from './lowdb.service.js';
import {
  TodoArrayInterface,
  TodoInterface,
} from './interfaces/lowdb.interface.js';
import { CreateTodoDto } from './dto/create-todo.dto.js';

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
  postTodo(@Body() createTodoDto: CreateTodoDto): Promise<string> {
    return this.lowdbService.postTodo(createTodoDto);
  }
}
