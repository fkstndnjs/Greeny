"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyLookTagDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dailyLookTag_entity_1 = require("../entities/dailyLookTag.entity");
class CreateDailyLookTagDto extends (0, swagger_1.PickType)(dailyLookTag_entity_1.DailyLookTag, [
    'name',
]) {
}
exports.CreateDailyLookTagDto = CreateDailyLookTagDto;
//# sourceMappingURL=createDailyLookTag.dto.js.map