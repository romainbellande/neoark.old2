import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { Config } from '@/config';
import { PlanetSchema } from './planet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Config.PLANET_MODEL, schema: PlanetSchema }])],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
