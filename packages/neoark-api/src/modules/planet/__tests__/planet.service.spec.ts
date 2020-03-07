import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet.entity';
import { MockRepository } from '@/helpers/testing/mock-repository';

describe('PlanetService', () => {
  let service: PlanetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetService,
        {
          provide: getRepositoryToken(Planet),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    service = module.get<PlanetService>(PlanetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
