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
exports.GetOneDailyLookResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dailyLook_entity_1 = require("../entities/dailyLook.entity");
class GetOneDailyLookResponseDto extends (0, swagger_1.PickType)(dailyLook_entity_1.DailyLook, [
    'createdAt',
    'updatedAt',
    'id',
    'imgUrl',
    'title',
    'text',
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '1',
            name: '실천인증',
        },
    }),
    __metadata("design:type", Object)
], GetOneDailyLookResponseDto.prototype, "dailyLookTag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '1',
            nickname: '죠르디',
        },
    }),
    __metadata("design:type", Object)
], GetOneDailyLookResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: '1',
                createdAt: '2023-05-21T12:34:56Z',
                comment: '댓글 내용',
                isMine: true,
                user: {
                    id: '1',
                    name: '댓글 유저',
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], GetOneDailyLookResponseDto.prototype, "dailyLookComment", void 0);
exports.GetOneDailyLookResponseDto = GetOneDailyLookResponseDto;
//# sourceMappingURL=getOneDailyLookResponse.dto.js.map