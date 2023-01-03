import { Module } from '@nestjs/common';
import { LowdbController } from './lowdb.controller';
import { LowdbService } from './lowdb.service';

@Module({
  imports: [],
  controllers: [LowdbController],
  providers: [LowdbService],
})
export class LowdbModule {}
