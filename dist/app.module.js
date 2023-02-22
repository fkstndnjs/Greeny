"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const email_module_1 = require("./email/email.module");
const auth_module_1 = require("./auth/auth.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const banner_module_1 = require("./banner/banner.module");
const challenge_module_1 = require("./challenge/challenge.module");
const event_module_1 = require("./event/event.module");
const aws_module_1 = require("./aws/aws.module");
const daily_look_module_1 = require("./daily-look/daily-look.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${__dirname}/../.${process.env.NODE_ENV}.env`,
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: 'greeny',
                entities: [`${__dirname}/**/*.entity{.ts,.js}`],
                synchronize: true,
            }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
            auth_module_1.AuthModule,
            aws_module_1.AwsModule,
            user_module_1.UserModule,
            banner_module_1.BannerModule,
            email_module_1.EmailModule,
            challenge_module_1.ChallengeModule,
            event_module_1.EventModule,
            daily_look_module_1.DailyLookModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map