import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MagazineService } from './magazine.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('매거진')
// @UseGuards(JwtAuthGuard)
@Controller('magazine')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}

  @Get()
  @ApiOperation({
    summary: '매거진 전체 조회',
  })
  async getMagazines(@Query() pagination: PaginationDto) {
    return await this.magazineService.getMagazines(pagination);
  }
}
