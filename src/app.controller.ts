import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service.js';

import { ResponseInterface } from './interfaces/lowdb.interface';
import { TodoDto } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos(): Promise<TodoEntity[]> {
    return this.appService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number): Promise<TodoEntity> {
    return this.appService.getTodo(id);
  }

  @Post()
  postTodo(@Body() todoDto: TodoDto): Promise<ResponseInterface> {
    return this.appService.postTodo(todoDto);
  }

  @Patch(':id')
  editTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() todoDto: TodoDto,
  ): Promise<ResponseInterface> {
    return this.appService.editTodo(id, todoDto);
  }
}
