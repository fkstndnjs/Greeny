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
exports.DailyLook = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const baseEntity_1 = require("../../common/entity/baseEntity");
const userBookmarkDailyLook_entity_1 = require("./userBookmarkDailyLook.entity");
const userLikeDailyLook_entity_1 = require("./userLikeDailyLook.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const dailyLookTag_entity_1 = require("./dailyLookTag.entity");
let DailyLook = class DailyLook extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DailyLook.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '제목',
    }),
    (0, typeorm_1.Column)({
        length: 100,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DailyLook.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '본문 내용',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DailyLook.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DailyLook.prototype, "likeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DailyLook.prototype, "bookmarkCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => dailyLookTag_entity_1.DailyLookTag, (DailyLookTag) => DailyLookTag.dailyLook),
    __metadata("design:type", dailyLookTag_entity_1.DailyLookTag)
], DailyLook.prototype, "dailyLookTag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.dailyLook),
    __metadata("design:type", user_entity_1.User)
], DailyLook.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userBookmarkDailyLook_entity_1.UserBookmarkDailyLook, (UserBookmarkDailyLook) => UserBookmarkDailyLook.dailyLook),
    __metadata("design:type", Array)
], DailyLook.prototype, "userBookmarkDailyLook", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userLikeDailyLook_entity_1.UserLikeDailyLook, (UserLikeDailyLook) => UserLikeDailyLook.dailyLook),
    __metadata("design:type", Array)
], DailyLook.prototype, "userLikeDailyLook", void 0);
DailyLook = __decorate([
    (0, typeorm_1.Entity)('dailyLook')
], DailyLook);
exports.DailyLook = DailyLook;
//# sourceMappingURL=dailyLook.entity.js.map