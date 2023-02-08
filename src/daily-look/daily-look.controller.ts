import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { Roles } from '../common/decorator/roles';
import { ApiSuccessResponse } from '../common/decorator/successResponse';
import { RoleType } from '../common/enum/RoleType';
import { DailyLookService } from './daily-look.service';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';

@ApiTags('데일리룩')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('daily-look')
export class DailyLookController {
  constructor(private readonly dailyLookService: DailyLookService) {}

  @Post()
  @Roles(RoleType.ADMIN)
  @ApiSuccessResponse({ paginated: false })
  async create(@Body() body: CreateDailyLookDto): Promise<void> {
    await this.dailyLookService.create(body);
  }

  @Post('tag')
  @Roles(RoleType.ADMIN)
  @ApiSuccessResponse({ paginated: false })
  async createTag(@Body() body: CreateDailyLookTagDto): Promise<void> {
    await this.dailyLookService.createTag(body);
  }
}
