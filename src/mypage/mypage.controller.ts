import { Controller } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('마이페이지')
@Controller('mypage')
export class MypageController {
  constructor(private readonly mypageService: MypageService) {}
}
