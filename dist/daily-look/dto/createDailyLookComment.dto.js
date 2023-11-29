"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDailyLookCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const dailyLookComment_entity_1 = require("../entities/dailyLookComment.entity");
class CreateDailyLookCommentDto extends (0, swagger_1.PickType)(dailyLookComment_entity_1.DailyLookComment, [
    'comment',
]) {
}
exports.CreateDailyLookCommentDto = CreateDailyLookCommentDto;
//# sourceMappingURL=createDailyLookComment.dto.js.map