import { Test, TestingModule } from '@nestjs/testing';
import { DailylookService } from './dailylook.service';

describe('DailylookService', () => {
  let service: DailylookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailylookService],
    }).compile();

    service = module.get<DailylookService>(DailylookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
