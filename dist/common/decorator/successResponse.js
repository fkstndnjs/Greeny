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
exports.ApiSuccessResponse = exports.SuccessResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class SuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'API 통신 성공 여부',
    }),
    __metadata("design:type", Boolean)
], SuccessResponse.prototype, "success", void 0);
exports.SuccessResponse = SuccessResponse;
const ApiSuccessResponse = ({ status = common_1.HttpStatus.OK, paginated = false, model, }) => {
    if (!model) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
            status,
            content: {
                'application/json': {
                    schema: {
                        properties: {
                            success: {
                                type: 'boolean',
                                example: true,
                                description: '전체 레코드 수',
                            },
                        },
                    },
                },
            },
        }));
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(SuccessResponse, model), (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(SuccessResponse) },
                {
                    properties: {
                        data: paginated
                            ? {
                                type: 'object',
                                properties: {
                                    items: {
                                        type: 'array',
                                        items: {
                                            $ref: (0, swagger_1.getSchemaPath)(model),
                                        },
                                    },
                                    meta: {
                                        type: 'object',
                                        properties: {
                                            page: {
                                                type: 'number',
                                                example: 1,
                                                description: '현제 페이지',
                                            },
                                            size: {
                                                type: 'number',
                                                example: 10,
                                                description: '조회 수',
                                            },
                                            total: {
                                                type: 'number',
                                                example: 100,
                                                description: '전체 레코드 수',
                                            },
                                            pageCount: {
                                                type: 'number',
                                                example: 10,
                                                description: '전체 페이지 수',
                                            },
                                            hasPreviousPage: {
                                                type: 'number',
                                                example: true,
                                                description: '이전 페이지 여부',
                                            },
                                            hasNextPage: {
                                                type: 'number',
                                                example: false,
                                                description: '다음 페이지 여부',
                                            },
                                        },
                                    },
                                },
                            }
                            : {
                                $ref: (0, swagger_1.getSchemaPath)(model),
                            },
                    },
                },
            ],
        },
    }));
};
exports.ApiSuccessResponse = ApiSuccessResponse;
//# sourceMappingURL=successResponse.js.map