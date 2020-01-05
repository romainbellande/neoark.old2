import FacilityCode from './facility-code.enum';

export default interface Facility {
  name: string;
  level: number;
  description: string;
  code: FacilityCode;
  upgradeStartedAt?: number;
  planetId?: string;
}
