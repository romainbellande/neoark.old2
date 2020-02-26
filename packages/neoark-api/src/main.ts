import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';

CrudConfigService.load({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    limit: 30,
    maxLimit: 30,
    alwaysPaginate: true,
  },
});

import { Config } from './config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: Config.IS_DEV ? console : false }),
  );

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('v1');

  const options = new DocumentBuilder()
    .setTitle('Product Catalog Backend')
    .setDescription('Store sodexo products')
    .setVersion('1.0')
    .addTag('product-catalog-backend')
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(9000, '0.0.0.0');
}
bootstrap();
