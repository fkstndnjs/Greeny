import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  EntityNotFoundError,
  QueryFailedError,
  Repository,
} from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateDailyLookDto } from './dto/createDailyLook.dto';
import { CreateDailyLookTagDto } from './dto/createDailyLookTag.dto';
import { DailyLook } from './entities/dailyLook.entity';
import { DailyLookTag } from './entities/dailyLookTag.entity';

@Injectable()
export class DailyLookService {
  constructor(
    @InjectRepository(DailyLook)
    private dailyLookRepository: Repository<DailyLook>,
    @InjectRepository(DailyLookTag)
    private dailyLookTagRepository: Repository<DailyLookTag>,
    private dataSource: DataSource,
  ) {}

  async create(body: CreateDailyLookDto): Promise<void> {
    const { imgUrl, text, title, dailyLookTag } = body;

    const dailyLookTagFromDb =
      await this.dailyLookTagRepository.findOneByOrFail({
        id: Number(dailyLookTag),
      });

    this.dataSource.transaction(async (manager) => {
      const dailyLook = new DailyLook();

      dailyLook.imgUrl = imgUrl;
      dailyLook.text = text;
      dailyLook.title = title;
      dailyLook.dailyLookTag = dailyLookTagFromDb;

      await manager.save(dailyLook);
    });
  }

  async createTag(body: CreateDailyLookTagDto): Promise<void> {
    const { name } = body;

    const isDuplicate = this.dailyLookTagRepository.findOneBy({ name });
    if (isDuplicate) {
      throw new ConflictException();
    }

    this.dataSource.transaction(async (manager) => {
      const dailyLookTag = new DailyLookTag();

      dailyLookTag.name = name;

      await manager.save(dailyLookTag);
    });
  }
}
