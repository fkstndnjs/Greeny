import { Module } from '@nestjs/common';
import { MagazineService } from './magazine.service';
import { MagazineController } from './magazine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Magazine } from 'src/magazine/entities/magazine.entity';
import { SubMagazine } from 'src/magazine/entities/subMagazine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Magazine, SubMagazine])],
  controllers: [MagazineController],
  providers: [MagazineService],
})
export class MagazineModule {}
