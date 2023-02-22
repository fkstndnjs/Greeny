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
exports.UserService = void 0;
const maskWord_1 = require("./../utils/maskWord");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const email_service_1 = require("../email/email.service");
const auth_service_1 = require("../auth/auth.service");
const RoleType_1 = require("../common/enum/RoleType");
let UserService = class UserService {
    constructor(userRepository, dataSource, emailService, authService) {
        this.userRepository = userRepository;
        this.dataSource = dataSource;
        this.emailService = emailService;
        this.authService = authService;
    }
    async signUp(body) {
        const { name, userId, password, email, nickname } = body;
        const userExist = await this.checkUserExistByEmail(email);
        if (userExist) {
            throw new common_1.ConflictException('이미 가입된 계정입니다');
        }
        await this.saveUser(name, email, userId, password, nickname);
        return { email };
    }
    async login(body) {
        const { userId, password } = body;
        const user = await this.userRepository.findOne({
            where: {
                userId,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('아이디 혹은 비밀번호가 틀렸습니다');
        }
        const isCorrectPassword = password === user.password;
        if (!isCorrectPassword) {
            throw new common_1.UnauthorizedException('아이디 혹은 비밀번호가 틀렸습니다');
        }
        return this.authService.login(user.id);
    }
    async findId(body, isFull) {
        const { name, email } = body;
        const user = await this.userRepository.findOne({
            where: {
                name,
                email,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다');
        }
        if (isFull) {
            await this.emailService.sendMail(email, user.userId);
            return {
                message: `회원님의 이메일로 아이디가 전송되었습니다`,
            };
        }
        return {
            message: `회원님의 아이디는 ${(0, maskWord_1.maskWord)(user.userId)}입니다`,
        };
    }
    async findPassword(body) {
        const { name, email, userId } = body;
        const user = await this.userRepository.findOne({
            where: {
                name,
                email,
                userId,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다');
        }
        await this.emailService.sendMail(email, user.password);
        return {
            message: '회원님의 이메일로 비밀번호가 전송되었습니다.',
        };
    }
    async saveUser(name, email, userId, password, nickname) {
        this.dataSource.transaction(async (manager) => {
            const user = new user_entity_1.User();
            user.name = name;
            user.email = email;
            user.userId = userId;
            user.password = password;
            user.nickname = nickname;
            user.role = RoleType_1.RoleType.USER;
            await manager.save(user);
        });
    }
    async checkUserExistByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        return !!user;
    }
    async findById(id) {
        return await this.userRepository.findOne({
            where: {
                id,
            },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource,
        email_service_1.EmailService,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map