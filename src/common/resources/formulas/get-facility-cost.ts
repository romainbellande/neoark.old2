import FacilityCode from '../facility/facility-code.enum';
import ResourceCode from '../resource/resource-code.enum';
import FacilityCostItem from '../facility/facility-cost-item.interface';

interface FacilityCostMatrix {
  [key: string]: (level: number) => FacilityCostItem[];
}

const facilityCostMatrix: FacilityCostMatrix = {
  [FacilityCode.METAL_MINE]: level => [
    {
      code: ResourceCode.METAL,
      amount: 60 * 1.5 ** (level - 1),
    },
    {
      code: ResourceCode.CRYSTAL,
      amount: 15 * 1.5 ** (level - 1),
    },
  ],
  [FacilityCode.CRYSTAL_MINE]: level => [
    {
      code: ResourceCode.METAL,
      amount: 48 * 1.6 ** (level - 1),
    },
    {
      code: ResourceCode.CRYSTAL,
      amount: 24 * 1.6 ** (level - 1),
    },
  ],
  [FacilityCode.DEUTERIUM_MINE]: level => [
    {
      code: ResourceCode.METAL,
      amount: 225 * 1.5 ** (level - 1),
    },
    {
      code: ResourceCode.CRYSTAL,
      amount: 75 * 1.5 ** (level - 1),
    },
  ],
};

export default (facilityCode: FacilityCode, nextLevel: number) => facilityCostMatrix[facilityCode](nextLevel);
