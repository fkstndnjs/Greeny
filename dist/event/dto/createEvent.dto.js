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
exports.CreateEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const event_entity_1 = require("../entites/event.entity");
class CreateEventDto extends (0, swagger_1.PickType)(event_entity_1.Event, [
    'startDate',
    'endDate',
    'title',
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'true',
        description: '원래는 boolean 타입인데 여기서만 string으로 줘야함',
    }),
    (0, class_transformer_1.Transform)(({ obj }) => {
        return obj.status === 'true';
    }, { toClassOnly: true }),
    __metadata("design:type", Boolean)
], CreateEventDto.prototype, "status", void 0);
exports.CreateEventDto = CreateEventDto;
//# sourceMappingURL=createEvent.dto.js.map