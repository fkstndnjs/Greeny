import { Test, TestingModule } from '@nestjs/testing';
import { DailylookController } from './dailylook.controller';
import { DailylookService } from './dailylook.service';

describe('DailylookController', () => {
  let controller: DailylookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailylookController],
      providers: [DailylookService],
    }).compile();

    controller = module.get<DailylookController>(DailylookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
