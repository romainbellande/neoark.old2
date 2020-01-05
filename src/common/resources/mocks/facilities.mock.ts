import Facility from '../facility/facility.interface';
import FacilityCode from '../facility/facility-code.enum';

const facilitesMock: Facility[] = [
  {
    name: 'Metal mine',
    level: 1,
    description: 'Main resource to construct facilities and spaceships',
    code: FacilityCode.METAL_MINE,
    upgradeStartedAt: new Date().getTime() - 120000,
  },
  {
    name: 'Crystal mine',
    level: 10,
    code: FacilityCode.CRYSTAL_MINE,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Deuterium mine',
    level: 10,
    code: FacilityCode.DEUTERIUM_MINE,
    description:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
];

export default facilitesMock;
