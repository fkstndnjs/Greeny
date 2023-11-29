import { Controller, UseGuards } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@ApiTags('마이페이지')
@UseGuards(JwtAuthGuard)
@Controller('mypage')
export class MypageController {
  constructor(private readonly mypageService: MypageService) {}
}
