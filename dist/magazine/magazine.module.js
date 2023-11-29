"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineModule = void 0;
const common_1 = require("@nestjs/common");
const magazine_service_1 = require("./magazine.service");
const magazine_controller_1 = require("./magazine.controller");
const typeorm_1 = require("@nestjs/typeorm");
const magazine_entity_1 = require("./entities/magazine.entity");
const subMagazine_entity_1 = require("./entities/subMagazine.entity");
let MagazineModule = class MagazineModule {
};
MagazineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([magazine_entity_1.Magazine, subMagazine_entity_1.SubMagazine])],
        controllers: [magazine_controller_1.MagazineController],
        providers: [magazine_service_1.MagazineService],
    })
], MagazineModule);
exports.MagazineModule = MagazineModule;
//# sourceMappingURL=magazine.module.js.map