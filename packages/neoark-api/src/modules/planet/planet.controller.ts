import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetDTO } from './planet.dto';
import { Planet } from './planet.interface';

@Controller('planets')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Get()
  findAll(): Promise<Planet[]> {
    return this.planetService.findAll();
  }

  @Post()
  create(@Body() planet: PlanetDTO): Promise<Planet> {
    return this.planetService.create(planet);
  }
}
