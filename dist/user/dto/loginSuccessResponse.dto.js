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
exports.LoginSuccessResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginSuccessResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2NzQyNzc5NTQsImV4cCI6MTY3NDI3ODAxNH0.1--Dw5z9AlMvG4p9x35EedkmEILwHeVESxHcFF09-UA',
    }),
    __metadata("design:type", String)
], LoginSuccessResponseDto.prototype, "token", void 0);
exports.LoginSuccessResponseDto = LoginSuccessResponseDto;
//# sourceMappingURL=loginSuccessResponse.dto.js.map