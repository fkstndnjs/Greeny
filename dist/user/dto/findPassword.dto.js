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
exports.FindPasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FindPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이름', example: '유석현' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindPasswordDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이메일', example: 'fkstndnjs@naver.com' }),
    (0, class_validator_1.IsEmail)({}, {
        message: '이메일 항목이 이메일 형식이 아닙니다',
    }),
    __metadata("design:type", String)
], FindPasswordDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '아이디', example: 'fkstndnjs' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindPasswordDto.prototype, "userId", void 0);
exports.FindPasswordDto = FindPasswordDto;
//# sourceMappingURL=findPassword.dto.js.map