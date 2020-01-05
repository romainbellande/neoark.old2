import ResourceCode from '../resource/resource-code.enum';

const resourceNameMatrix = {
  [ResourceCode.METAL]: 'Metal',
  [ResourceCode.CRYSTAL]: 'Crystal',
  [ResourceCode.DEUTERIUM]: 'Deuterium',
};

export default (code: ResourceCode): string => resourceNameMatrix[code];
