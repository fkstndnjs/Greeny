import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
  async createEvent(@Body() body: CreateEventDto) {
    await this.eventService.createEvent(body);
  }
}
