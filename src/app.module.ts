import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoRepository } from './repositories/todo.repository';
import path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'todo_api_db',
      entities: [TodoEntity],
      migrations: [path.join(__dirname, './migrations/*.ts')],
      // migrationsTableName: 'custom_migration_table',
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TodoRepository],
})
export class AppModule {}
