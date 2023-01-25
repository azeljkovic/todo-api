import { Injectable } from '@nestjs/common';
import { JSONFile, Low } from 'lowdb';
import {
  TodoArrayInterface,
  TodoInterface,
} from './interfaces/lowdb.interface.js';
import { randomUUID } from 'node:crypto';
import { TodoDto } from './dto/todo.dto.js';

@Injectable()
export class LowdbService {
  async getAllTodos(): Promise<TodoArrayInterface> {
    const adapter = new JSONFile<TodoArrayInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();
    return db.data;
  }

  async getTodo(id): Promise<TodoInterface | string> {
    const adapter = new JSONFile<TodoArrayInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();

    const found = db.data.posts.find((element) => element.id === id);

    if (found) {
      return found;
    } else {
      return 'nothing found';
    }
  }

  async postTodo(body: TodoDto): Promise<string> {
    const adapter = new JSONFile<TodoArrayInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();

    // If db.json doesn't exist, db.data will be null
    // Use the code below to set default data
    db.data ||= { posts: [] };

    // Create and query items using native JS API
    db.data.posts.push({ id: randomUUID(), text: body.todo });
    // Finally, write db.data content to file
    await db.write();

    return 'todo posted';
  }

  async editTodo(id: string, body: TodoDto): Promise<string> {
    const adapter = new JSONFile<TodoArrayInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();

    // If db.json doesn't exist, db.data will be null
    // Use the code below to set default data
    db.data ||= { posts: [] };

    // Create and query items using native JS API
    // db.data.posts.push({ id: randomUUID(), text: body.todo });
    // console.log(db.data.posts);

    let todoFound = false;
    for (const obj in db.data.posts) {
      if (id === db.data.posts[obj].id) {
        db.data.posts[obj].text = body.todo;
        await db.write();
        todoFound = true;
        break;
      }
    }

    if (todoFound) {
      return 'todo edited';
    } else {
      return 'id not found';
    }
  }
}
