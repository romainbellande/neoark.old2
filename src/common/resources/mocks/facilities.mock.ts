import Facility from '../facility/facility.interface';
import FacilityCode from '../facility/facility-code.enum';

const facilitesMock: Facility[] = [
  {
    level: 1,
    code: FacilityCode.METAL_MINE,
    upgradeStartedAt: new Date().getTime() - 120000,
  },
  {
    level: 1,
    code: FacilityCode.CRYSTAL_MINE,
  },
  {
    level: 1,
    code: FacilityCode.DEUTERIUM_MINE,
  },
];

export default facilitesMock;
