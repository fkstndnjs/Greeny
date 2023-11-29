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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyLookComment = void 0;
const swagger_1 = require("@nestjs/swagger");
const baseEntity_1 = require("../../common/entity/baseEntity");
const dailyLook_entity_1 = require("./dailyLook.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let DailyLookComment = class DailyLookComment extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '댓글입니다',
    }),
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], DailyLookComment.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.dailyLookComment),
    __metadata("design:type", user_entity_1.User)
], DailyLookComment.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => dailyLook_entity_1.DailyLook, (DailyLook) => DailyLook.dailyLookComment),
    __metadata("design:type", dailyLook_entity_1.DailyLook)
], DailyLookComment.prototype, "dailyLook", void 0);
DailyLookComment = __decorate([
    (0, typeorm_1.Entity)('dailyLookComment')
], DailyLookComment);
exports.DailyLookComment = DailyLookComment;
//# sourceMappingURL=dailyLookComment.entity.js.map