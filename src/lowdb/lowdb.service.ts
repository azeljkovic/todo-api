import { Injectable } from '@nestjs/common';
import { JSONFile, Low } from 'lowdb';
import { TodoInterface } from './interfaces/lowdb.interface.js';

@Injectable()
export class LowdbService {
  async getTodos(): Promise<TodoInterface> {
    const adapter = new JSONFile<TodoInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();
    return db.data;
  }

  async postTodos(body): Promise<string> {
    const adapter = new JSONFile<TodoInterface>('src/lowdb/db.json');
    const db = new Low(adapter);

    // Read data from JSON file, this will set db.data content
    await db.read();

    // If db.json doesn't exist, db.data will be null
    // Use the code below to set default data
    db.data ||= { posts: [] };

    // Create and query items using native JS API
    db.data.posts.push({ timestamp: new Date().toJSON(), text: body.todo });
    // Finally, write db.data content to file
    await db.write();

    return 'todo posted';
  }
}
