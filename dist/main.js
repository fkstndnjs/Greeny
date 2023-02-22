"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const expressBasicAuth = require("express-basic-auth");
const app_module_1 = require("./app.module");
const entityNotFoundError_filter_1 = require("./common/filter/entityNotFoundError/entityNotFoundError.filter");
const http_exception_filter_1 = require("./common/filter/http-exception/http-exception.filter");
const success_interceptor_1 = require("./common/interceptor/success/success.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.useGlobalInterceptors(new success_interceptor_1.SuccessInterceptor());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(), new entityNotFoundError_filter_1.EntityNotFoundFilter());
    app.use(['/swagger-api'], expressBasicAuth({
        challenge: true,
        users: {
            [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Greeny')
        .setDescription('Greeny 백엔드 API 문서')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger-api', app, document);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map