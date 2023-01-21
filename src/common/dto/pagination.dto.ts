import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: '페이지',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  page: number = 1;

  @ApiProperty({
    description: '페이지 당 데이터 갯수',
    example: 10,
  })
  @IsOptional()
  @IsNumber()
  limit: number = 30;

  getOffset(): number {
    return (this.page - 1) * this.limit || 0;
  }

  getLimit(): number {
    return this.limit;
  }
}

export class PaginationMeta {
  constructor(total: number, limit: number, currentPage: number) {
    this.page = currentPage;
    this.currentPage = currentPage;
    this.limit = limit;
    this.total = total;
    this.endPage = Math.ceil(total / limit);
    this.has_previous = currentPage > 1;
    this.has_next = currentPage < this.endPage;
  }
  limit: number;
  total: number;
  endPage: number;
  page: number;
  currentPage: number;
  has_previous: boolean;
  has_next: boolean;
}

export class Pagination<T> {
  items: T[];
  pagination: PaginationMeta;

  constructor(total: number, limit: number, currentPage: number, items: T[]) {
    this.items = items;
    this.pagination = new PaginationMeta(total, limit, currentPage);
  }
}
