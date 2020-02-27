import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PlanetController } from '../planet.controller';
import { Config } from '@/config';
import { PlanetService } from '../planet.service';
import { planetModelMock } from './mocks/planet-model.mock';

describe('Planet Controller', () => {
  let controller: PlanetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [
        PlanetService,
        {
          provide: getModelToken(Config.PLANET_MODEL),
          useValue: planetModelMock,
        },
      ],
    }).compile();

    controller = module.get<PlanetController>(PlanetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
