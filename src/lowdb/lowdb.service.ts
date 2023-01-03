import { Injectable } from '@nestjs/common';

@Injectable()
export class LowdbService {
  getTodos(): string {
    return 'Hello from lowdb service!';
  }
}
