import ResourceCode from '../resource/resource-code.enum';

const resourceCalculationMatrix = {
  [ResourceCode.METAL]: (level: number) => 30 * level * 1.1 ** level,
  [ResourceCode.CRYSTAL]: (level: number) => 20 * level * 1.1 ** level,
  [ResourceCode.DEUTERIUM]: (level: number) => 10 * level * 1.1 ** level,
};

export default (code: ResourceCode, level: number) => resourceCalculationMatrix[code](level);
