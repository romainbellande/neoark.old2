import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { Config } from '@/config';
import { PlanetService } from '../planet.service';
import { planetModelMock } from './mocks/planet-model.mock';

describe('PlanetService', () => {
  let service: PlanetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetService,
        {
          provide: getModelToken(Config.PLANET_MODEL),
          useValue: planetModelMock,
        },
      ],
    }).compile();

    service = module.get<PlanetService>(PlanetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
