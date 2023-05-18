import { Controller, UseGuards } from '@nestjs/common';
import { MagazineService } from './magazine.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('매거진')
@UseGuards(JwtAuthGuard)
@Controller('magazine')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}
}
