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
exports.Event = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const baseEntity_1 = require("../../common/entity/baseEntity");
let Event = class Event extends baseEntity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '그리니 챌린지 이벤트',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Event.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://greeny2023.s3.amazonaws.com/event/1675752939340/sample.png',
    }),
    (0, typeorm_1.Column)({
        length: 255,
    }),
    __metadata("design:type", String)
], Event.prototype, "mainThumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        example: true,
    }),
    (0, typeorm_1.Column)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Event.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2023-01-01',
    }),
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Event.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2023-12-31',
    }),
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Event.prototype, "endDate", void 0);
Event = __decorate([
    (0, typeorm_1.Entity)('event')
], Event);
exports.Event = Event;
//# sourceMappingURL=event.entity.js.map