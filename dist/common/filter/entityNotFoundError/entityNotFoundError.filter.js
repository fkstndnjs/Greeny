"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundFilter = void 0;
const common_1 = require("@nestjs/common");
const EntityNotFoundError_1 = require("typeorm/error/EntityNotFoundError");
let EntityNotFoundFilter = class EntityNotFoundFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const message = exception.message
            .replace(/[^a-zA-Z0-9:"{}\s:]/g, '')
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .replace(/\b(\d+)\b/g, ' $1 ')
            .replace(/\s+/g, ' ');
        console.log(message);
        response.status(404).json({
            success: false,
            error: {
                statusCode: 404,
                message,
                error: 'Entity Not Found',
            },
        });
    }
};
EntityNotFoundFilter = __decorate([
    (0, common_1.Catch)(EntityNotFoundError_1.EntityNotFoundError)
], EntityNotFoundFilter);
exports.EntityNotFoundFilter = EntityNotFoundFilter;
//# sourceMappingURL=entityNotFoundError.filter.js.map