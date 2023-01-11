import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { MagazineService } from './magazine.service';

@Controller('magazine')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}
}
