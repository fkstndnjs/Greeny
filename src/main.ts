import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';
import { EntityNotFoundFilter } from './common/filter/entityNotFoundError/entityNotFoundError.filter';
import { HttpExceptionFilter } from './common/filter/http-exception/http-exception.filter';
import { SuccessInterceptor } from './common/interceptor/success/success.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter(), new EntityNotFoundFilter());

  // app.use(
  //   ['/swagger-api'],
  //   expressBasicAuth({
  //     challenge: true,
  //     users: {
  //       [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
  //     },
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('Greeny')
    .setDescription('Greeny 백엔드 API 문서')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-api', app, document);

  await app.listen(8000);
}
bootstrap();
