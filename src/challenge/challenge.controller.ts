import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorator/currentUser';
import { User } from 'aws-sdk/clients/appstream';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('챌린지')
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

  @Delete('like/:idChallenge')
  @ApiOperation({
    summary: '챌린지 좋아요 취소',
  })
  async removeLike(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}

  @Post('bookmark/:idChallenge')
  @ApiOperation({
    summary: '챌린지 북마크',
  })
  async bookmark(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}

  @Delete('bookmark/:idChallenge')
  @ApiOperation({
    summary: '챌린지 북마크 취소',
  })
  async removeBookmark(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}

  @Post('comment/:idChallenge')
  @ApiOperation({
    summary: '챌린지 댓글 작성',
  })
  async createComment(
    @CurrentUser() user: User,
    @Param('idChallenge') idChallenge: number,
  ) {}

  @Put('comment/:idChallengeComment')
  @ApiOperation({
    summary: '챌린지 댓글 수정',
  })
  async updateComment(
    @CurrentUser() user: User,
    @Param('idChallengeComment') idChallengeComment: number,
  ) {}

  @Delete('comment/:idChallengeComment')
  @ApiOperation({
    summary: '챌린지 댓글 삭제',
  })
  async deleteComment(
    @CurrentUser() user: User,
    @Param('idChallengeComment') idChallengeComment: number,
  ) {}
}
