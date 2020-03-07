import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController, ParsedRequest, CrudRequest, ParsedBody, CreateManyDto } from '@nestjsx/crud';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Planet } from './planet.entity';
import { PlanetService } from './planet.service';
import { OktaAuthGuard } from '@/guards/okta-auth.guard';

@Crud({
  model: { type: Planet },
  routes: {
    getManyBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    getOneBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    createOneBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    createManyBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    updateOneBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    replaceOneBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
    deleteOneBase: {
      decorators: [UseGuards(OktaAuthGuard)],
    },
  },
})
@ApiBearerAuth()
@ApiTags('planets')
@Controller('planets')
export class PlanetController {
  constructor(public service: PlanetService) {}
}
