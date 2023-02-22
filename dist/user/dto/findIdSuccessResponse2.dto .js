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
exports.FindIdSuccessResponseDto2 = void 0;
const swagger_1 = require("@nestjs/swagger");
class FindIdSuccessResponseDto2 {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '회원님의 이메일로 아이디가 전송되었습니다',
    }),
    __metadata("design:type", String)
], FindIdSuccessResponseDto2.prototype, "message", void 0);
exports.FindIdSuccessResponseDto2 = FindIdSuccessResponseDto2;
//# sourceMappingURL=findIdSuccessResponse2.dto%20.js.map