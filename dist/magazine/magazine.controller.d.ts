import { MagazineService } from './magazine.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class MagazineController {
    private readonly magazineService;
    constructor(magazineService: MagazineService);
    getMagazines(pagination: PaginationDto): Promise<import("src/common/dto/pagination.dto").Pagination<import("./entities/magazine.entity").Magazine>>;
}
