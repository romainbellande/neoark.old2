import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Planet } from './planet.entity';

@Injectable()
export class PlanetService extends TypeOrmCrudService<Planet> {
  constructor(@InjectRepository(Planet) repo) {
    super(repo);
  }
}
