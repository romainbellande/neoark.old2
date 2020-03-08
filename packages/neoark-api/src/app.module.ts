import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Config } from './config';
import { CommandsModule } from './commands/commands.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { PlanetModule } from './modules/planet/planet.module';
import { Planet } from './modules/planet/planet.entity';

const dynamicImports: any[] = [];
const providers = [];

const dbParams: TypeOrmModuleOptions = {
  type: 'postgres',
  url: Config.POSTGRES_URL,
  entities: [Planet],
  synchronize: Config.IS_DEV,
  dropSchema: Config.IS_DEV,
};

if (Config.ELASTICSEARCH_NODE) {
  dynamicImports.push(
    ElasticsearchModule.register({
      node: Config.ELASTICSEARCH_NODE,
    }),
  );

  providers.push({
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  });
}

@Module({
  imports: [TypeOrmModule.forRoot(dbParams), ...dynamicImports, ConsoleModule, CommandsModule, PlanetModule],
  controllers: [],
  providers,
  exports: [CommandsModule],
})
export class AppModule {}
