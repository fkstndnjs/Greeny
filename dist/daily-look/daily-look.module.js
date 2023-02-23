"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyLookModule = void 0;
const common_1 = require("@nestjs/common");
const daily_look_service_1 = require("./daily-look.service");
const daily_look_controller_1 = require("./daily-look.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dailyLook_entity_1 = require("./entities/dailyLook.entity");
const dailyLookTag_entity_1 = require("./entities/dailyLookTag.entity");
const aws_module_1 = require("../aws/aws.module");
let DailyLookModule = class DailyLookModule {
};
DailyLookModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dailyLook_entity_1.DailyLook, dailyLookTag_entity_1.DailyLookTag]), aws_module_1.AwsModule],
        controllers: [daily_look_controller_1.DailyLookController],
        providers: [daily_look_service_1.DailyLookService],
    })
], DailyLookModule);
exports.DailyLookModule = DailyLookModule;
//# sourceMappingURL=daily-look.module.js.map