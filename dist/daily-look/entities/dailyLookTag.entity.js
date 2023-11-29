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
exports.DailyLookTag = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dailyLook_entity_1 = require("./dailyLook.entity");
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../common/entity/baseEntity");
let DailyLookTag = class DailyLookTag extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '실천인증',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DailyLookTag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dailyLook_entity_1.DailyLook, (DailyLook) => DailyLook.dailyLookTag),
    __metadata("design:type", Array)
], DailyLookTag.prototype, "dailyLook", void 0);
DailyLookTag = __decorate([
    (0, typeorm_1.Entity)('dailyLookTag')
], DailyLookTag);
exports.DailyLookTag = DailyLookTag;
//# sourceMappingURL=dailyLookTag.entity.js.map