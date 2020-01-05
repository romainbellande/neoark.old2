import FacilityCode from '../facility/facility-code.enum';
import ResourceCode from '../resource/resource-code.enum';

interface FacilityCostResourceMatrix {
  [key: string]: number;
}

interface FacilityCostMatrix {
  [key: string]: (level: number) => FacilityCostResourceMatrix;
}

const facilityProductionMatrix: FacilityCostMatrix = {
  [FacilityCode.METAL_MINE]: level => ({
    [ResourceCode.METAL]: 30 * level * 1.1 ** level,
  }),
  [FacilityCode.CRYSTAL_MINE]: level => ({
    [ResourceCode.CRYSTAL]: 20 * level * 1.1 ** level,
  }),
  [FacilityCode.DEUTERIUM_MINE]: level => ({
    [ResourceCode.DEUTERIUM]: 10 * level * 1.1 ** level,
  }),
};

export default (code: FacilityCode, level: number) => facilityProductionMatrix[code](level);
