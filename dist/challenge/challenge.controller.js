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
exports.ChallengeController = void 0;
const common_1 = require("@nestjs/common");
const challenge_service_1 = require("./challenge.service");
const swagger_1 = require("@nestjs/swagger");
const currentUser_1 = require("../common/decorator/currentUser");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
let ChallengeController = class ChallengeController {
    constructor(challengeService) {
        this.challengeService = challengeService;
    }
    async createChallenge(user) { }
    async getAllChallenge(user, pagination) { }
    async getOneChallenge(user, idChallenge) { }
    async addLike(user, idChallenge) { }
    async removeLike(user, idChallenge) { }
    async bookmark(user, idChallenge) { }
    async removeBookmark(user, idChallenge) { }
    async createComment(user, idChallenge) { }
    async updateComment(user, idChallengeComment) { }
    async deleteComment(user, idChallengeComment) { }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 생성',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "createChallenge", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 전체조회',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "getAllChallenge", null);
__decorate([
    (0, common_1.Get)(':idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 상세조회',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "getOneChallenge", null);
__decorate([
    (0, common_1.Post)('like/:idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 좋아요',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "addLike", null);
__decorate([
    (0, common_1.Delete)('like/:idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 좋아요 취소',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "removeLike", null);
__decorate([
    (0, common_1.Post)('bookmark/:idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 북마크',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "bookmark", null);
__decorate([
    (0, common_1.Delete)('bookmark/:idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 북마크 취소',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "removeBookmark", null);
__decorate([
    (0, common_1.Post)('comment/:idChallenge'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 댓글 작성',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallenge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "createComment", null);
__decorate([
    (0, common_1.Put)('comment/:idChallengeComment'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 댓글 수정',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallengeComment')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)('comment/:idChallengeComment'),
    (0, swagger_1.ApiOperation)({
        summary: '챌린지 댓글 삭제',
    }),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('idChallengeComment')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ChallengeController.prototype, "deleteComment", null);
ChallengeController = __decorate([
    (0, swagger_1.ApiTags)('챌린지(미구현)'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('challenge'),
    __metadata("design:paramtypes", [challenge_service_1.ChallengeService])
], ChallengeController);
exports.ChallengeController = ChallengeController;
//# sourceMappingURL=challenge.controller.js.map