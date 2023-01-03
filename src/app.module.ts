import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LowdbController } from './lowdb/lowdb.controller';
import { LowdbService } from './lowdb/lowdb.service';

@Module({
  imports: [],
  controllers: [AppController, LowdbController],
  providers: [AppService, LowdbService],
})
export class AppModule {}
