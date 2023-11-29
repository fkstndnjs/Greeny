import { Pagination, PaginationDto } from 'src/common/dto/pagination.dto';
import { Magazine } from 'src/magazine/entities/magazine.entity';
import { Repository } from 'typeorm';
export declare class MagazineService {
    private magazineRepository;
    constructor(magazineRepository: Repository<Magazine>);
    getMagazines(pagination: PaginationDto): Promise<Pagination<Magazine>>;
}
