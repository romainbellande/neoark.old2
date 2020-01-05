import Facility from '../facility/facility.interface';
import ResourceCode from '../resource/resource-code.enum';
import FacilityCode from '../facility/facility-code.enum';

const facilitesMock: Facility[] = [
  {
    name: 'Metal mine',
    level: 1,
    description: 'Main resource to construct facilities and spaceships',
    code: FacilityCode.METAL_MINE,
    upgradeStartedAt: new Date().getTime() - 120000,
    cost: [
      {
        code: ResourceCode.METAL,
        amount: 2500,
      },
    ],
    production: [
      {
        name: 'Metal',
        code: ResourceCode.METAL,
      },
    ],
  },
  {
    name: 'Crystal mine',
    level: 10,
    code: FacilityCode.CRYSTAL_MINE,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cost: [
      {
        code: ResourceCode.METAL,
        amount: 2500,
      },
      {
        code: ResourceCode.CRYSTAL,
        amount: 2500,
      },
    ],
    production: [
      {
        name: 'Crystal',
        code: ResourceCode.CRYSTAL,
      },
    ],
  },
  {
    name: 'Deuterium mine',
    level: 10,
    code: FacilityCode.DEUTERIUM_MINE,
    description:
      'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    cost: [
      {
        code: ResourceCode.METAL,
        amount: 2500,
      },
      {
        code: ResourceCode.CRYSTAL,
        amount: 2500,
      },
    ],
    production: [
      {
        name: 'Deuterium',
        code: ResourceCode.DEUTERIUM,
      },
    ],
  },
];

export default facilitesMock;
