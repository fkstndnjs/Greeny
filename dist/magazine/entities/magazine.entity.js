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
exports.Magazine = void 0;
const swagger_1 = require("@nestjs/swagger");
const baseEntity_1 = require("../../common/entity/baseEntity");
const subMagazine_entity_1 = require("./subMagazine.entity");
const typeorm_1 = require("typeorm");
let Magazine = class Magazine extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Magazine.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '제목',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Magazine.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '부제목',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Magazine.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subMagazine_entity_1.SubMagazine, (subMagazine) => subMagazine.magazine),
    __metadata("design:type", Array)
], Magazine.prototype, "subMagazine", void 0);
Magazine = __decorate([
    (0, typeorm_1.Entity)('magazine')
], Magazine);
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.entity.js.map