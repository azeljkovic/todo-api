import { TodoArrayInterface } from './interfaces/lowdb.interface.js';
import { JSONFile, Low } from 'lowdb';

export class Lowdb {
  static async readData(): Promise<TodoArrayInterface> {
    const db = this.createAdapter();
    // Read data from JSON file, this will set db.data content
    await db.read();
    return db.data;
  }

  static async writeData(newData) {
    const db = this.createAdapter();
    await db.read();

    // If db.json doesn't exist, db.data will be null
    // Use the code below to set default data
    db.data ||= { posts: [] };
    // Create and query items using native JS API
    db.data.posts.push(newData);
    // Finally, write db.data content to file
    await db.write();
  }

  static async editData(id, todo) {
    const db = this.createAdapter();
    await db.read();

    // If db.json doesn't exist, db.data will be null
    // Use the code below to set default data
    db.data ||= { posts: [] };

    let todoFound = false;
    for (const obj in db.data.posts) {
      if (id === db.data.posts[obj].id) {
        db.data.posts[obj].text = todo;
        await db.write();
        todoFound = true;
        break;
      }
    }
    return todoFound;
  }

  private static createAdapter() {
    const adapter = new JSONFile<TodoArrayInterface>('src/lowdb/db.json');
    return new Low(adapter);
  }
}
