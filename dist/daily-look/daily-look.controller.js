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
exports.DailyLookController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const currentUser_1 = require("../common/decorator/currentUser");
const getAllDailyLookResponse_dto_1 = require("./dto/getAllDailyLookResponse.dto");
const getAllDailyLookTag_dto_1 = require("./dto/getAllDailyLookTag.dto");
const user_entity_1 = require("../user/entities/user.entity");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const role_guard_1 = require("../auth/role/role.guard");
const roles_1 = require("../common/decorator/roles");
const successResponse_1 = require("../common/decorator/successResponse");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const RoleType_1 = require("../common/enum/RoleType");
const daily_look_service_1 = require("./daily-look.service");
const createDailyLook_dto_1 = require("./dto/createDailyLook.dto");
const createDailyLookTag_dto_1 = require("./dto/createDailyLookTag.dto");
const createDailyLookComment_dto_1 = require("./dto/createDailyLookComment.dto");
const getOneDailyLookResponse_dto_1 = require("./dto/getOneDailyLookResponse.dto");
let DailyLookController = class DailyLookController {
    constructor(dailyLookService) {
        this.dailyLookService = dailyLookService;
    }
    async create(user, file, body) {
        await this.dailyLookService.create(user, file, body);
    }
    async getAll(user, pagination) {
        return await this.dailyLookService.getAll(user, pagination);
    }
    async getOne(user, idDailyLook) {
        return await this.dailyLookService.getOne(idDailyLook, user);
    }
    async createTag(body) {
        await this.dailyLookService.createTag(body);
    }
    async getAllTag() {
        return await this.dailyLookService.getAllTag();
    }
    async addLike(user, idDailyLook) {
        return await this.dailyLookService.addLike(user, idDailyLook);
    }
    async removeLike(user, idDailyLook) {
        return await this.dailyLookService.removeLike(user, idDailyLook);
    }
    async bookmark(user, idDailyLook) {
        return await this.dailyLookService.bookmark(user, idDailyLook);
    }
    async removeBookmark(user, idDailyLook) {
        return await this.dailyLookService.removeBookmark(user, idDailyLook);
    }
    async createComment(user, idDailyLook, body) {
        return await this.dailyLookService.createComment(user, idDailyLook, body);
    }
    async updateComment(user, idDailyLookComment, body) {
        return await this.dailyLookService.updateComment(user, idDailyLookComment, body);
    }
    async deleteComment(user, idDailyLookComment) {
        return await this.dailyLookService.deleteComment(user, idDailyLookComment);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 생성',
    }),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object, createDailyLook_dto_1.CreateDailyLookDto]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 전체조회',
    }),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: true, model: getAllDailyLookResponse_dto_1.GetAllDailyLookResponseDto }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 상세조회',
    }),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false, model: getOneDailyLookResponse_dto_1.GetOneDailyLookResponseDto }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('tag'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 태그 생성',
    }),
    (0, roles_1.Roles)(RoleType_1.RoleType.ADMIN),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDailyLookTag_dto_1.CreateDailyLookTagDto]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "createTag", null);
__decorate([
    (0, common_1.Get)('tag'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 태그 전체조회',
    }),
    (0, successResponse_1.ApiSuccessResponse)({
        paginated: false,
        model: getAllDailyLookTag_dto_1.GetAllDailyLookTagResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "getAllTag", null);
__decorate([
    (0, common_1.Post)('like/:idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 좋아요',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "addLike", null);
__decorate([
    (0, common_1.Delete)('like/:idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 좋아요 취소',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "removeLike", null);
__decorate([
    (0, common_1.Post)('bookmark/:idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 북마크',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "bookmark", null);
__decorate([
    (0, common_1.Delete)('bookmark/:idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 좋아요 취소',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "removeBookmark", null);
__decorate([
    (0, common_1.Post)('comment/:idDailyLook'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 댓글 작성',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLook')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number, createDailyLookComment_dto_1.CreateDailyLookCommentDto]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "createComment", null);
__decorate([
    (0, common_1.Put)('comment/:idDailyLookComment'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 댓글 수정',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLookComment')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number, createDailyLookComment_dto_1.CreateDailyLookCommentDto]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)('comment/:idDailyLookComment'),
    (0, swagger_1.ApiOperation)({
        summary: '데일리룩 댓글 삭제',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idDailyLookComment')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], DailyLookController.prototype, "deleteComment", null);
DailyLookController = __decorate([
    (0, swagger_1.ApiTags)('데일리룩'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('daily-look'),
    __metadata("design:paramtypes", [daily_look_service_1.DailyLookService])
], DailyLookController);
exports.DailyLookController = DailyLookController;
//# sourceMappingURL=daily-look.controller.js.map