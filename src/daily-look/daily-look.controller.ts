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
import { ApiTags } from '@nestjs/swagger';
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
  @Roles(RoleType.ADMIN)
  @ApiSuccessResponse({ paginated: false })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateDailyLookDto,
  ): Promise<void> {
    await this.dailyLookService.create(file, body);
  }

  @Get()
  @ApiSuccessResponse({ paginated: true, model: DailyLook })
  async getAll(@Query() pagination: PaginationDto) {
    return await this.dailyLookService.getAll(pagination);
  }

  @Post('tag')
  @Roles(RoleType.ADMIN)
  @ApiSuccessResponse({ paginated: false })
  async createTag(@Body() body: CreateDailyLookTagDto): Promise<void> {
    await this.dailyLookService.createTag(body);
  }
}
