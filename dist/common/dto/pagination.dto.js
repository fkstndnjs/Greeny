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
exports.Pagination = exports.PaginationMeta = exports.PaginationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PaginationDto {
    constructor() {
        this.page = 1;
        this.limit = 30;
    }
    getOffset() {
        return (this.page - 1) * this.limit || 0;
    }
    getLimit() {
        return this.limit;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '페이지',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '페이지 당 데이터 갯수',
        example: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
exports.PaginationDto = PaginationDto;
class PaginationMeta {
    constructor(total, limit, currentPage) {
        this.page = currentPage;
        this.currentPage = currentPage;
        this.limit = limit;
        this.total = total;
        this.endPage = Math.ceil(total / limit);
        this.has_previous = currentPage > 1;
        this.has_next = currentPage < this.endPage;
    }
}
exports.PaginationMeta = PaginationMeta;
class Pagination {
    constructor(total, limit, currentPage, items) {
        this.items = items;
        this.pagination = new PaginationMeta(total, limit, currentPage);
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.dto.js.map