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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./dto/login.dto");
const findIdByEmail_dto_1 = require("./dto/findIdByEmail.dto");
const findPassword_dto_1 = require("./dto/findPassword.dto");
const successResponse_1 = require("../common/decorator/successResponse");
const signUpSuccessResponse_dto_1 = require("./dto/signUpSuccessResponse.dto");
const loginSuccessResponse_dto_1 = require("./dto/loginSuccessResponse.dto");
const findIdSuccessResponse_dto_1 = require("./dto/findIdSuccessResponse.dto");
const findPasswordSuccessResponse_dto_1 = require("./dto/findPasswordSuccessResponse.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(body) {
        return this.userService.signUp(body);
    }
    async login(body) {
        return this.userService.login(body);
    }
    async findId(body, isFull) {
        return this.userService.findId(body, isFull);
    }
    async findPassword(body) {
        return this.userService.findPassword(body);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '회원가입',
    }),
    (0, common_1.Post)('signup'),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false, model: signUpSuccessResponse_dto_1.SignUpSuccessResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '로그인',
    }),
    (0, common_1.Post)('login'),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false, model: loginSuccessResponse_dto_1.LoginSuccessResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '아이디 찾기',
    }),
    (0, common_1.Post)('id'),
    (0, successResponse_1.ApiSuccessResponse)({ paginated: false, model: findIdSuccessResponse_dto_1.FindIdSuccessResponseDto }),
    (0, swagger_1.ApiQuery)({
        name: 'isFull',
        type: 'boolean',
        description: 'isFull에 true값을 주면 이메일로 아이디 전체가 전송된다',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('isFull', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findIdByEmail_dto_1.FindEmailDto, Boolean]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findId", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '비밀번호 찾기',
    }),
    (0, common_1.Post)('pw'),
    (0, successResponse_1.ApiSuccessResponse)({
        paginated: false,
        model: findPasswordSuccessResponse_dto_1.FindPasswordSuccessResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findPassword_dto_1.FindPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findPassword", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('유저'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map