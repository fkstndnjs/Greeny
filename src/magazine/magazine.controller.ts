import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MagazineService } from './magazine.service';

@Controller('magazine')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}
}
