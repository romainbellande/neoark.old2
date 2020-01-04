import PlanetResource from '../planet/planet-resource.interface';
import PlanetResourceCode from '../planet/planet-resource-code.enum';

const resourceCalculationMatrix = {
  [PlanetResourceCode.METAL]: (level: number) => 30 * level * 1.1 ** level,
  [PlanetResourceCode.CRYSTAL]: (level: number) => 20 * level * 1.1 ** level,
  [PlanetResourceCode.DEUTERIUM]: (level: number) => 10 * level * 1.1 ** level,
};

export default ({ code, level }: PlanetResource) => resourceCalculationMatrix[code](level);
