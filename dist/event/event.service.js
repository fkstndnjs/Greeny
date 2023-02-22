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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aws_service_1 = require("../aws/aws.service");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const event_entity_1 = require("./entites/event.entity");
let EventService = class EventService {
    constructor(eventRepository, dataSource, awsService) {
        this.eventRepository = eventRepository;
        this.dataSource = dataSource;
        this.awsService = awsService;
    }
    async createEvent(body, files) {
        this.dataSource.transaction(async (manager) => {
            const event = new event_entity_1.Event();
            const { thumbnailKey, mainThumbnailKey } = await this.awsService.uploadEventToS3(files);
            event.thumbnail = thumbnailKey;
            event.mainThumbnail = mainThumbnailKey;
            event.status = body.status;
            event.startDate = body.startDate;
            event.endDate = body.endDate;
            event.title = body.title;
            await manager.save(event);
        });
    }
    async getEvents(pagination) {
        const [events, total] = await this.eventRepository
            .createQueryBuilder('event')
            .orderBy('event.createdAt', 'DESC')
            .skip(pagination.getOffset())
            .take(pagination.getLimit())
            .getManyAndCount();
        const items = events.map((event) => {
            return Object.assign(Object.assign({}, event), { thumbnail: this.awsService.getAwsS3FileUrl(event.thumbnail), mainThumbnail: this.awsService.getAwsS3FileUrl(event.mainThumbnail) });
        });
        return new pagination_dto_1.Pagination(total, pagination.getLimit(), pagination.page, items);
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource,
        aws_service_1.AwsService])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map