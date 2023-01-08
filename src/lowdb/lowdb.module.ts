import { Module } from '@nestjs/common';
import { LowdbController } from './lowdb.controller.js';
import { LowdbService } from './lowdb.service.js';

@Module({
  imports: [],
  controllers: [LowdbController],
  providers: [LowdbService],
})
export class LowdbModule {}
