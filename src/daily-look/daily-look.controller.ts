import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorator/currentUser';
import { GetAllDailyLookResponseDto } from 'src/daily-look/dto/getAllDailyLookResponse.dto';
import { GetAllDailyLookTagResponseDto } from 'src/daily-look/dto/getAllDailyLookTag.dto';
import { DailyLookTag } from 'src/daily-look/entities/dailyLookTag.entity';
import { User } from 'src/user/entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { Roles } from '../common/decorator/roles';
import { ApiSuccessResponse } from '../common/decorator/successResponse';
import { PaginationDto } from '../common/dto/pagination.dto';
import { RoleType } from '../common/enum/RoleType';
import { DailyLookService } from './daily-look.service';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
import { CreateDailyLookCommentDto } from 'src/daily-look/dto/createDailyLookComment.dto';
import { GetOneDailyLookResponseDto } from 'src/daily-look/dto/getOneDailyLookResponse.dto';

@ApiTags('데일리룩')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('daily-look')
export class DailyLookController {
  constructor(private readonly dailyLookService: DailyLookService) {}

  @Post()
  @ApiOperation({
    summary: '데일리룩 생성',
  })
  @ApiSuccessResponse({ paginated: false })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @CurrentUser() user: User,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateDailyLookDto,
  ): Promise<void> {
    await this.dailyLookService.create(user, file, body);
  }

  @Get()
  @ApiOperation({
    summary: '데일리룩 전체조회',
  })
  @ApiSuccessResponse({ paginated: true, model: GetAllDailyLookResponseDto })
  async getAll(@CurrentUser() user: User, @Query() pagination: PaginationDto) {
    return await this.dailyLookService.getAll(user, pagination);
  }

  @Get(':idDailyLook')
  @ApiOperation({
    summary: '데일리룩 상세조회',
  })
  @ApiSuccessResponse({ paginated: false, model: GetOneDailyLookResponseDto })
  async getOne(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<DailyLook> {
    return await this.dailyLookService.getOne(idDailyLook, user);
  }

  @Delete(':idDailyLook')
  @ApiOperation({
    summary: '데일리룩 삭제',
  })
  async delete(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<void> {
    return await this.dailyLookService.delete(user, idDailyLook);
  }

  @Post('tag')
  @ApiOperation({
    summary: '데일리룩 태그 생성',
  })
  // @Roles(RoleType.ADMIN)
  @ApiSuccessResponse({ paginated: false })
  async createTag(@Body() body: CreateDailyLookTagDto): Promise<void> {
    await this.dailyLookService.createTag(body);
  }

  @Get('tag')
  @ApiOperation({
    summary: '데일리룩 태그 전체조회',
  })
  @ApiSuccessResponse({
    paginated: false,
    model: GetAllDailyLookTagResponseDto,
  })
  async getAllTag(): Promise<{
    dailyLookTags: DailyLookTag[];
  }> {
    return await this.dailyLookService.getAllTag();
  }

  @Post('like/:idDailyLook')
  @ApiOperation({
    summary: '데일리룩 좋아요',
  })
  async addLike(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<void> {
    return await this.dailyLookService.addLike(user, idDailyLook);
  }

  @Delete('like/:idDailyLook')
  @ApiOperation({
    summary: '데일리룩 좋아요 취소',
  })
  async removeLike(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<void> {
    return await this.dailyLookService.removeLike(user, idDailyLook);
  }

  @Post('bookmark/:idDailyLook')
  @ApiOperation({
    summary: '데일리룩 북마크',
  })
  async bookmark(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<void> {
    return await this.dailyLookService.bookmark(user, idDailyLook);
  }

  @Delete('bookmark/:idDailyLook')
  @ApiOperation({
    summary: '데일리룩 좋아요 취소',
  })
  async removeBookmark(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
  ): Promise<void> {
    return await this.dailyLookService.removeBookmark(user, idDailyLook);
  }

  @Post('comment/:idDailyLook')
  @ApiOperation({
    summary: '데일리룩 댓글 작성',
  })
  async createComment(
    @CurrentUser() user: User,
    @Param('idDailyLook') idDailyLook: number,
    @Body() body: CreateDailyLookCommentDto,
  ): Promise<void> {
    return await this.dailyLookService.createComment(user, idDailyLook, body);
  }

  @Put('comment/:idDailyLookComment')
  @ApiOperation({
    summary: '데일리룩 댓글 수정',
  })
  async updateComment(
    @CurrentUser() user: User,
    @Param('idDailyLookComment') idDailyLookComment: number,
    @Body() body: CreateDailyLookCommentDto,
  ): Promise<void> {
    return await this.dailyLookService.updateComment(
      user,
      idDailyLookComment,
      body,
    );
  }

  @Delete('comment/:idDailyLookComment')
  @ApiOperation({
    summary: '데일리룩 댓글 삭제',
  })
  async deleteComment(
    @CurrentUser() user: User,
    @Param('idDailyLookComment') idDailyLookComment: number,
  ): Promise<void> {
    return await this.dailyLookService.deleteComment(user, idDailyLookComment);
  }
}
