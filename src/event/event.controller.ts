import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiSuccessResponse } from 'src/common/decorator/successResponse';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { Roles } from '../common/decorator/roles';
import { PaginationDto } from '../common/dto/pagination.dto';
import { RoleType } from '../common/enum/RoleType';
import { CreateEventDto } from './dto/createEvent.dto';
import { Event } from './entites/event.entity';
import { EventService } from './event.service';

@ApiTags('이벤트')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @Roles(RoleType.ADMIN)
  @ApiOperation({
    summary: '이벤트 생성',
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'mainThumbnail', maxCount: 1 },
    ]),
  )
  @ApiSuccessResponse({ paginated: false })
  async createEvent(
    @Body()
    body: CreateEventDto,
    @UploadedFiles()
    files: {
      thumbnail: Express.Multer.File[];
      mainThumbnail: Express.Multer.File[];
    },
  ) {
    await this.eventService.createEvent(body, files);
  }

  @Get()
  @ApiOperation({
    summary: '이벤트 전체 조회',
  })
  @ApiSuccessResponse({ paginated: true, model: Event })
  async getEvents(@Query() pagination: PaginationDto) {
    return await this.eventService.getEvents(pagination);
  }
}
