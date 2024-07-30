import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { EnvService } from './infra/env/env.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule
  );
  const configService = app.get(EnvService)
  const port = configService.get('PORT')
  function getSwaggerServerUrl() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return '';
      default:
        return `http://localhost:${port}`;
    }
  }
  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('0.1')
    .addServer(getSwaggerServerUrl())
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
