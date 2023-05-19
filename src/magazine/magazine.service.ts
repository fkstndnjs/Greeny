import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination, PaginationDto } from 'src/common/dto/pagination.dto';
import { Magazine } from 'src/magazine/entities/magazine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MagazineService {
  constructor(
    @InjectRepository(Magazine)
    private magazineRepository: Repository<Magazine>,
  ) {}

  async getMagazines(pagination: PaginationDto): Promise<Pagination<Magazine>> {
    const [magazines, total] = await this.magazineRepository
      .createQueryBuilder('magazine')
      .leftJoin('magazine.subMagazine', 'subMagazine')
      .orderBy('magazine.createdAt', 'DESC')
      .skip(pagination.getOffset())
      .take(pagination.getLimit())
      .getManyAndCount();

    return new Pagination(
      total,
      pagination.getLimit(),
      pagination.page,
      magazines,
    );
  }
}
