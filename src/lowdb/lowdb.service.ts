import { Injectable } from '@nestjs/common';
import { JSONFile, Low } from 'lowdb';

@Injectable()
export class LowdbService {
  getTodos(): string {
    return 'Hello from lowdb service!';
  }

  async postTodos(body): Promise<string> {
    type Data = {
      posts: { timestamp: string; text: string }[];
    };

    const adapter = new JSONFile<Data>('src/lowdb/db.json');
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
