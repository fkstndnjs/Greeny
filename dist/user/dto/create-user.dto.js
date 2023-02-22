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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이름', example: '유석현' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, {
        message: '이름은 최소 2글자 이상 작성해주세요',
    }),
    (0, class_validator_1.MaxLength)(10, {
        message: '이름은 최대 10글자까지 가능합니다',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이메일', example: 'fkstndnjs@naver.com' }),
    (0, class_validator_1.IsEmail)({}, {
        message: '이메일 항목이 이메일 형식이 아닙니다',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '아이디', example: 'fkstndnjs' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, {
        message: '아이디는 최소 1글자 이상 작성해주세요',
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: '아이디는 최대 20글자까지 가능합니다',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '비밀번호', example: 'password123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10, {
        message: '비밀번호는 최소 10글자 이상 작성해주세요',
    }),
    (0, class_validator_1.MaxLength)(16, {
        message: '비밀번호는 최대 16글자까지 가능합니다',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '닉네임', example: '죠르디' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1, {
        message: '닉네임은 최소 1글자 이상 작성해주세요',
    }),
    (0, class_validator_1.MaxLength)(10, {
        message: '닉네임은 최대 10글자까지 가능합니다',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nickname", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map