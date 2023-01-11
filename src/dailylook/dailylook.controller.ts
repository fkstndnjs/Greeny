import { Controller } from '@nestjs/common';
import { DailylookService } from './dailylook.service';

@Controller('dailylook')
export class DailylookController {
  constructor(private readonly dailylookService: DailylookService) {}
}
