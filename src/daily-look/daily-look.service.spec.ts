import { Test, TestingModule } from '@nestjs/testing';
import { DailyLookService } from './daily-look.service';

describe('DailyLookService', () => {
  let service: DailyLookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyLookService],
    }).compile();

    service = module.get<DailyLookService>(DailyLookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
