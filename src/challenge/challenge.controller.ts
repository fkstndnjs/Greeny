import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ApiOperation } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorator/currentUser';
import { User } from 'aws-sdk/clients/appstream';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  @ApiOperation({
    summary: '챌린지 생성',
  })
  async createChallenge(@CurrentUser() user: User) {}

  @Get()
  @ApiOperation({
    summary: '챌린지 전체조회',
  })
  async getAllChallenge(
    @CurrentUser() user: User,
    @Query() pagination: PaginationDto,
  ) {}

  @Get(':idChallenge')
  @ApiOperation({
    summary: '챌린지 상세조회',
  })
  async getOneChallenge(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}

  @Post('like/:idChallenge')
  @ApiOperation({
    summary: '챌린지 좋아요',
  })
  async addLike(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}
}
