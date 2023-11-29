"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const magazine_entity_1 = require("./entities/magazine.entity");
const typeorm_2 = require("typeorm");
let MagazineService = class MagazineService {
    constructor(magazineRepository) {
        this.magazineRepository = magazineRepository;
    }
    async getMagazines(pagination) {
        const [magazines, total] = await this.magazineRepository
            .createQueryBuilder('magazine')
            .leftJoinAndSelect('magazine.subMagazine', 'subMagazine')
            .orderBy('magazine.createdAt', 'DESC')
            .skip(pagination.getOffset())
            .take(pagination.getLimit())
            .getManyAndCount();
        return new pagination_dto_1.Pagination(total, pagination.getLimit(), pagination.page, magazines);
    }
};
MagazineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(magazine_entity_1.Magazine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MagazineService);
exports.MagazineService = MagazineService;
//# sourceMappingURL=magazine.service.js.map