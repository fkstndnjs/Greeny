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
exports.MagazineController = void 0;
const common_1 = require("@nestjs/common");
const magazine_service_1 = require("./magazine.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../common/dto/pagination.dto");
let MagazineController = class MagazineController {
    constructor(magazineService) {
        this.magazineService = magazineService;
    }
    async getMagazines(pagination) {
        return await this.magazineService.getMagazines(pagination);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '매거진 전체 조회',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], MagazineController.prototype, "getMagazines", null);
MagazineController = __decorate([
    (0, swagger_1.ApiTags)('매거진'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('magazine'),
    __metadata("design:paramtypes", [magazine_service_1.MagazineService])
], MagazineController);
exports.MagazineController = MagazineController;
//# sourceMappingURL=magazine.controller.js.map