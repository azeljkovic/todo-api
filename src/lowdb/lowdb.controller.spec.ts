import { Test, TestingModule } from '@nestjs/testing';
import { LowdbController } from './lowdb.controller';
import { LowdbService } from './lowdb.service';

describe('AppController', () => {
  let lowdbController: LowdbController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LowdbController],
      providers: [LowdbService],
    }).compile();

    lowdbController = app.get<LowdbController>(LowdbController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lowdbController.getHello()).toBe('Hello World!');
    });
  });
});
