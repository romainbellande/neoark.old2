import * as mongoose from 'mongoose';

import { Config } from '@/config';
import { PlanetSchema } from '../../planet.schema';

export const planetModelMock = mongoose.model(Config.PLANET_MODEL, PlanetSchema);
