import { Controller, Get } from '@nestjs/common';
import { LowdbService } from './lowdb.service';

@Controller('lowdb')
export class LowdbController {
  constructor(private readonly lowdbService: LowdbService) {}

  @Get()
  getHello(): string {
    return this.lowdbService.getTodos();
  }
}
