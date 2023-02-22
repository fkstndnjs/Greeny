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
exports.DailyLookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aws_service_1 = require("../aws/aws.service");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const dailyLook_entity_1 = require("./entities/dailyLook.entity");
const dailyLookTag_entity_1 = require("./entities/dailyLookTag.entity");
let DailyLookService = class DailyLookService {
    constructor(dailyLookRepository, dailyLookTagRepository, dataSource, awsService) {
        this.dailyLookRepository = dailyLookRepository;
        this.dailyLookTagRepository = dailyLookTagRepository;
        this.dataSource = dataSource;
        this.awsService = awsService;
    }
    async create(file, body) {
        const { text, title, dailyLookTag } = body;
        const dailyLookTagFromDb = await this.dailyLookTagRepository.findOneByOrFail({
            id: Number(dailyLookTag),
        });
        const imgUrl = await this.awsService.uploadFileToS3('dailyLook', file);
        this.dataSource.transaction(async (manager) => {
            const dailyLook = new dailyLook_entity_1.DailyLook();
            dailyLook.imgUrl = imgUrl;
            dailyLook.text = text;
            dailyLook.title = title;
            dailyLook.dailyLookTag = dailyLookTagFromDb;
            await manager.save(dailyLook);
        });
    }
    async getAll(pagination) {
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
        const items = dailyLooks.map((dailyLook) => {
            return Object.assign(Object.assign({}, dailyLook), { imgUrl: this.awsService.getAwsS3FileUrl(dailyLook.imgUrl) });
        });
        return new pagination_dto_1.Pagination(total, pagination.getLimit(), pagination.page, items);
    }
    async getOne(idDailyLook) {
        return await this.dailyLookRepository
            .createQueryBuilder('dailyLook')
            .leftJoin('dailyLook.dailyLookTag', 'dailyLookTag')
            .leftJoin('dailyLook.user', 'user')
            .addSelect(['dailyLookTag.id', 'dailyLookTag.name'])
            .addSelect(['user.id', 'user.nickname'])
            .where('dailyLook.id = :idDailyLook', { idDailyLook })
            .getOneOrFail();
    }
    async createTag(body) {
        const { name } = body;
        const isDuplicate = await this.dailyLookTagRepository.findOneBy({ name });
        if (isDuplicate) {
            throw new common_1.ConflictException();
        }
        this.dataSource.transaction(async (manager) => {
            const dailyLookTag = new dailyLookTag_entity_1.DailyLookTag();
            dailyLookTag.name = name;
            await manager.save(dailyLookTag);
        });
    }
    async getAllTag() {
        const dailyLookTags = await this.dailyLookTagRepository
            .createQueryBuilder('dailyLookTag')
            .select(['dailyLookTag.name'])
            .orderBy('dailyLookTag.name')
            .getMany();
        return { dailyLookTags };
    }
};
DailyLookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dailyLook_entity_1.DailyLook)),
    __param(1, (0, typeorm_1.InjectRepository)(dailyLookTag_entity_1.DailyLookTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        aws_service_1.AwsService])
], DailyLookService);
exports.DailyLookService = DailyLookService;
//# sourceMappingURL=daily-look.service.js.map