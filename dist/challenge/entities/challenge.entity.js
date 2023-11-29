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
exports.Challenge = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const baseEntity_1 = require("../../common/entity/baseEntity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Challenge = class Challenge extends baseEntity_1.BaseEntity {
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
], Challenge.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '제목',
    }),
    (0, typeorm_1.Column)({
        length: 100,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Challenge.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '부제목',
    }),
    (0, typeorm_1.Column)({
        length: 100,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Challenge.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '본문 내용',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Challenge.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Challenge.prototype, "likeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Challenge.prototype, "bookmarkCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.dailyLook),
    __metadata("design:type", user_entity_1.User)
], Challenge.prototype, "user", void 0);
Challenge = __decorate([
    (0, typeorm_1.Entity)('challenge')
], Challenge);
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.entity.js.map