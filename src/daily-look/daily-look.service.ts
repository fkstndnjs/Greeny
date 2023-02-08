import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  EntityNotFoundError,
  QueryFailedError,
  Repository,
} from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
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
    private awsService: AwsService,
  ) {}

  async create(
    file: Express.Multer.File,
    body: CreateDailyLookDto,
  ): Promise<void> {
    const { text, title, dailyLookTag } = body;

    const dailyLookTagFromDb =
      await this.dailyLookTagRepository.findOneByOrFail({
        id: Number(dailyLookTag),
      });

    const imgUrl = await this.awsService.uploadFileToS3('dailyLook', file);

    this.dataSource.transaction(async (manager) => {
      const dailyLook = new DailyLook();

      dailyLook.imgUrl = imgUrl;
      dailyLook.text = text;
      dailyLook.title = title;
      dailyLook.dailyLookTag = dailyLookTagFromDb;

      await manager.save(dailyLook);
    });
  }

  async getAll(pagination: PaginationDto) {
    const [dailyLooks, total] = await this.dailyLookRepository
      .createQueryBuilder('dailyLook')
      .orderBy('dailyLook.createdAt', 'DESC')
      .skip(pagination.getOffset())
      .take(pagination.getLimit())
      .getManyAndCount();

    const items = dailyLooks.map((dailyLook) => {
      return {
        ...dailyLook,
        imgUrl: this.awsService.getAwsS3FileUrl(dailyLook.imgUrl),
      };
    });

    return new Pagination(total, pagination.getLimit(), pagination.page, items);
  }

  async createTag(body: CreateDailyLookTagDto): Promise<void> {
    const { name } = body;

    const isDuplicate = await this.dailyLookTagRepository.findOneBy({ name });
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
