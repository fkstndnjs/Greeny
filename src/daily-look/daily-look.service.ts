import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBookmarkDailyLook } from 'src/daily-look/entities/userBookmarkDailyLook.entity';
import { UserLikeDailyLook } from 'src/daily-look/entities/userLikeDailyLook.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { AwsService } from '../aws/aws.service';
import { Pagination, PaginationDto } from '../common/dto/pagination.dto';
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
    @InjectRepository(UserBookmarkDailyLook)
    private userBookmarkDailyLook: Repository<UserBookmarkDailyLook>,
    @InjectRepository(UserLikeDailyLook)
    private userLikeDailyLook: Repository<UserLikeDailyLook>,
    private awsService: AwsService,
    private dataSource: DataSource,
  ) {}

  async create(
    user: User,
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

      dailyLook.user = user;
      dailyLook.imgUrl = imgUrl;
      dailyLook.text = text;
      dailyLook.title = title;
      dailyLook.dailyLookTag = dailyLookTagFromDb;

      await manager.save(dailyLook);
    });
  }

  async getAll(user: User, pagination: PaginationDto) {
    const [dailyLooks, total] = await this.dailyLookRepository
      .createQueryBuilder('dailyLook')
      .leftJoin('dailyLook.dailyLookTag', 'dailyLookTag')
      .leftJoin('dailyLook.user', 'user')
      .addSelect(['dailyLookTag.id', 'dailyLookTag.name'])
      .addSelect(['user.id', 'user.nickname'])
      .orderBy('dailyLook.createdAt', 'DESC')
      .skip(pagination.getOffset())
      .take(pagination.getLimit())
      .getManyAndCount();

    const items = await Promise.all(
      dailyLooks.map(async (dailyLook) => {
        const { likes } = await this.userLikeDailyLook
          .createQueryBuilder('userLikeDailyLook')
          .select('COUNT(*)', 'likes')
          .where('userLikeDailyLook.dailyLook = :idDailyLook', {
            idDailyLook: dailyLook.id,
          })
          .getRawOne();

        const { isLiked } = await this.userLikeDailyLook
          .createQueryBuilder('userLikeDailyLook')
          .select('COUNT(*)', 'isLiked')
          .where('userLikeDailyLook.user = :idUser', {
            idUser: user.id,
          })
          .andWhere('userLikeDailyLook.dailyLook = :idDailyLook', {
            idDailyLook: dailyLook.id,
          })
          .getRawOne();

        const { isBookmarked } = await this.userBookmarkDailyLook
          .createQueryBuilder('userBookmarkDailyLook')
          .select('COUNT(*)', 'isBookmarked')
          .where('userBookmarkDailyLook.user = :idUser', {
            idUser: user.id,
          })
          .andWhere('userBookmarkDailyLook.dailyLook = :idDailyLook', {
            idDailyLook: dailyLook.id,
          })
          .getRawOne();

        return {
          ...dailyLook,
          imgUrl: this.awsService.getAwsS3FileUrl(dailyLook.imgUrl),
          likes,
          isUserLiked: !!Number(isLiked),
          isUserBookmarked: !!Number(isBookmarked),
        };
      }),
    );

    return new Pagination(total, pagination.getLimit(), pagination.page, items);
  }

  async getOne(idDailyLook: number): Promise<DailyLook> {
    return await this.dailyLookRepository
      .createQueryBuilder('dailyLook')
      .leftJoin('dailyLook.dailyLookTag', 'dailyLookTag')
      .leftJoin('dailyLook.user', 'user')
      .addSelect(['dailyLookTag.id', 'dailyLookTag.name'])
      .addSelect(['user.id', 'user.nickname'])
      .where('dailyLook.id = :idDailyLook', { idDailyLook })
      .getOneOrFail();
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

  async getAllTag(): Promise<{
    dailyLookTags: DailyLookTag[];
  }> {
    const dailyLookTags = await this.dailyLookTagRepository
      .createQueryBuilder('dailyLookTag')
      .select(['dailyLookTag.name'])
      .orderBy('dailyLookTag.name')
      .getMany();

    return { dailyLookTags };
  }

  async addLike(user: User, idDailyLook: number): Promise<void> {
    const dailyLook = await this.dailyLookRepository.findOneByOrFail({
      id: idDailyLook,
    });

    this.dataSource.transaction(async (manager) => {
      const userLikeDailyLook = new UserLikeDailyLook();

      userLikeDailyLook.user = user;
      userLikeDailyLook.dailyLook = dailyLook;

      await manager.save(userLikeDailyLook);
    });
  }

  async removeLike(user: User, idDailyLook: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager
        .createQueryBuilder()
        .delete()
        .from(UserLikeDailyLook)
        .where('dailyLookId = :idDailyLook', { idDailyLook })
        .andWhere('userId = :idUser', { idUser: user.id })
        .execute();

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async bookmark(user: User, idDailyLook: number): Promise<void> {
    const dailyLook = await this.dailyLookRepository.findOneByOrFail({
      id: idDailyLook,
    });

    this.dataSource.transaction(async (manager) => {
      const userBookmarkDailyLook = new UserBookmarkDailyLook();

      userBookmarkDailyLook.user = user;
      userBookmarkDailyLook.dailyLook = dailyLook;

      await manager.save(userBookmarkDailyLook);
    });
  }

  async removeBookmark(user: User, idDailyLook: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager
        .createQueryBuilder()
        .delete()
        .from(UserBookmarkDailyLook)
        .where('dailyLookId = :idDailyLook', { idDailyLook })
        .andWhere('userId = :idUser', { idUser: user.id })
        .execute();

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
