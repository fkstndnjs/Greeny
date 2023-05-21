import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt/jwt.guard';
import { Roles } from './common/decorator/roles';
import { RoleType } from './common/enum/RoleType';
import { RolesGuard } from './auth/role/role.guard';

@ApiTags('app')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RoleType.ADMIN)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
