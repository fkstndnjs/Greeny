"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyLookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dailyLook_entity_1 = require("../entities/dailyLook.entity");
class CreateDailyLookDto extends (0, swagger_1.PickType)(dailyLook_entity_1.DailyLook, [
    'text',
    'title',
    'dailyLookTag',
]) {
}
exports.CreateDailyLookDto = CreateDailyLookDto;
//# sourceMappingURL=createDailyLook.dto.js.map