import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { Roles } from '../common/decorator/roles';
import { RoleType } from '../common/enum/RoleType';
import { CreateEventDto } from './dto/createEvent.dto';
import { EventService } from './event.service';

@ApiTags('event')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @Roles(RoleType.ADMIN)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'mainThumbnail', maxCount: 1 },
    ]),
  )
  async createEvent(
    @Body()
    body: {
      data: string;
    },
    @UploadedFiles()
    files: {
      thumbnail: Express.Multer.File[];
      mainThumbnail: Express.Multer.File[];
    },
  ) {
    await this.eventService.createEvent(JSON.parse(body.data), files);
  }
}
