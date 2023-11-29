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
exports.User = void 0;
const dailyLook_entity_1 = require("../../daily-look/entities/dailyLook.entity");
const userBookmarkDailyLook_entity_1 = require("../../daily-look/entities/userBookmarkDailyLook.entity");
const userLikeDailyLook_entity_1 = require("../../daily-look/entities/userLikeDailyLook.entity");
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../common/entity/baseEntity");
const dailyLookComment_entity_1 = require("../../daily-look/entities/dailyLookComment.entity");
const challenge_entity_1 = require("../../challenge/entities/challenge.entity");
let User = class User extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 30,
    }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
    }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dailyLook_entity_1.DailyLook, (DailyLook) => DailyLook.user),
    __metadata("design:type", Array)
], User.prototype, "dailyLook", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userBookmarkDailyLook_entity_1.UserBookmarkDailyLook, (UserBookmarkDailyLook) => UserBookmarkDailyLook.user),
    __metadata("design:type", Array)
], User.prototype, "userBookmarkDailyLook", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userLikeDailyLook_entity_1.UserLikeDailyLook, (UserLikeDailyLook) => UserLikeDailyLook.user),
    __metadata("design:type", Array)
], User.prototype, "userLikeDailyLook", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dailyLookComment_entity_1.DailyLookComment, (DailyLookComment) => DailyLookComment.user),
    __metadata("design:type", Array)
], User.prototype, "dailyLookComment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => challenge_entity_1.Challenge, (Challenge) => Challenge.user),
    __metadata("design:type", Array)
], User.prototype, "challenge", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map