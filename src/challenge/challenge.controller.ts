import { Controller, Post } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  @ApiOperation({
    summary: '챌린지 생성',
  })
  async createChallenge() {}
}
