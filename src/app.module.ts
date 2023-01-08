import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LowdbController } from './lowdb/lowdb.controller.js';
import { LowdbService } from './lowdb/lowdb.service.js';

@Module({
  imports: [],
  controllers: [AppController, LowdbController],
  providers: [AppService, LowdbService],
})
export class AppModule {}
