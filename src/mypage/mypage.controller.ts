import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MypageService } from './mypage.service';
import { CreateMypageDto } from './dto/create-mypage.dto';
import { UpdateMypageDto } from './dto/update-mypage.dto';

@Controller('mypage')
export class MypageController {
  constructor(private readonly mypageService: MypageService) {}

  @Post()
  create(@Body() createMypageDto: CreateMypageDto) {
    return this.mypageService.create(createMypageDto);
  }

  @Get()
  findAll() {
    return this.mypageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mypageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMypageDto: UpdateMypageDto) {
    return this.mypageService.update(+id, updateMypageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mypageService.remove(+id);
  }
}
