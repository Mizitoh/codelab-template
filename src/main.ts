import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  setupOpenApi(app); // TODO - change port

  await app.listen(3000);
}
bootstrap();

function setupOpenApi(app: INestApplication): void {
  const config = new DocumentBuilder().setTitle('CodelabTemplate').build(); // TODO - change title
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, { useGlobalPrefix: true });

  Logger.log('OpenAPI is running on http://localhost:3000/api/v1/docs'); //TODO - change port
}
