import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { Config } from './config';
import { CommandsModule } from './commands/commands.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { PlanetModule } from './modules/planet/planet.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

const dynamicImports: any[] = [];

const providers = [];

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
  imports: [
    ...dynamicImports,
    MongooseModule.forRoot(Config.MONGO_URL),
    AuthModule,
    UserModule,
    ConsoleModule,
    CommandsModule,
    PlanetModule,
  ],
  controllers: [],
  providers,
  exports: [CommandsModule],
})
export class AppModule {}
