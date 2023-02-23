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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const successResponse_1 = require("../common/decorator/successResponse");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const role_guard_1 = require("../auth/role/role.guard");
const roles_1 = require("../common/decorator/roles");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const RoleType_1 = require("../common/enum/RoleType");
const createEvent_dto_1 = require("./dto/createEvent.dto");
const event_entity_1 = require("./entites/event.entity");
const event_service_1 = require("./event.service");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async createEvent(body, files) {
        await this.eventService.createEvent(body, files);
    }
    async getEvents(pagination) {
        return await this.eventService.getEvents(pagination);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_1.Roles)(RoleType_1.RoleType.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: '이벤트 생성',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'mainThumbnail', maxCount: 1 },
    ])),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createEvent_dto_1.CreateEventDto, Object]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '이벤트 전체조회',
    }),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: true, model: event_entity_1.Event }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEvents", null);
EventController = __decorate([
    (0, swagger_1.ApiTags)('이벤트'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map