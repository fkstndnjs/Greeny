import { Test, TestingModule } from '@nestjs/testing';
import { DailyLookController } from './daily-look.controller';
import { DailyLookService } from './daily-look.service';

describe('DailyLookController', () => {
  let controller: DailyLookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyLookController],
      providers: [DailyLookService],
    }).compile();

    controller = module.get<DailyLookController>(DailyLookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
