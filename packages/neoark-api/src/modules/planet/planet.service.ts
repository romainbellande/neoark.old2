import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Config } from '@/config';
import { Planet } from './planet.interface';
import { PlanetDTO } from './planet.dto';

@Injectable()
export class PlanetService {
  constructor(@InjectModel(Config.PLANET_MODEL) private readonly planetModel: Model<Planet>) {}

  async create(createPlanetDTO: PlanetDTO): Promise<Planet> {
    const createdPlanet = new this.planetModel(createPlanetDTO);
    return createdPlanet.save();
  }

  async findAll(): Promise<Planet[]> {
    return this.planetModel.find().exec();
  }
}
