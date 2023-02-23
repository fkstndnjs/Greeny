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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const jwt_guard_1 = require("./auth/jwt/jwt.guard");
const currentUser_1 = require("./common/decorator/currentUser");
const user_entity_1 = require("./user/entities/user.entity");
const platform_express_1 = require("@nestjs/platform-express");
const aws_service_1 = require("./aws/aws.service");
const roles_1 = require("./common/decorator/roles");
const RoleType_1 = require("./common/enum/RoleType");
const role_guard_1 = require("./auth/role/role.guard");
let AppController = class AppController {
    constructor(appService, awsService) {
        this.appService = appService;
        this.awsService = awsService;
    }
    getHello(user) {
        return this.appService.getHello();
    }
    async uploadImage(file) {
        return await this.awsService.uploadFileToS3('test', file);
    }
    async deleteFile(body) {
        return this.awsService.deleteS3Object(body.key);
    }
    async getFile(body) {
        return this.awsService.getAwsS3FileUrl(body.key);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, currentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteFile", null);
__decorate([
    (0, common_1.Get)('file'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getFile", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('테스트ㄴ'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, roles_1.Roles)(RoleType_1.RoleType.ADMIN),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        aws_service_1.AwsService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map