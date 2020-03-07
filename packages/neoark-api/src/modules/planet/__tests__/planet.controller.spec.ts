import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { PlanetController } from '../planet.controller';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet.entity';
import { MockRepository } from '@/helpers/testing/mock-repository';

describe('Planet Controller', () => {
  let controller: PlanetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [
        PlanetService,
        {
          provide: getRepositoryToken(Planet),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<PlanetController>(PlanetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
