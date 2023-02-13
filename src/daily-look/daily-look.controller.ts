import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetAllDailyLookResponseDto } from 'src/daily-look/dto/getAllDailyLookResponse.dto';
import { GetAllDailyLookTagResponseDto } from 'src/daily-look/dto/getAllDailyLookTag.dto';
import { DailyLookTag } from 'src/daily-look/entities/dailyLookTag.entity';
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
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateDailyLookDto,
  ): Promise<void> {
    await this.dailyLookService.create(file, body);
  }

  @Get()
  @ApiOperation({
    summary: '데일리룩 전체조회',
  })
  @ApiSuccessResponse({ paginated: true, model: GetAllDailyLookResponseDto })
  async getAll(@Query() pagination: PaginationDto) {
    return await this.dailyLookService.getAll(pagination);
  }

  @Post('tag')
  @ApiOperation({
    summary: '데일리룩 태그 생성',
  })
  @Roles(RoleType.ADMIN)
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
}
