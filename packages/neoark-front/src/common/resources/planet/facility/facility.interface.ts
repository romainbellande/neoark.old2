import FacilityCode from './facility-code.enum';

export default interface Facility {
  level: number;
  code: FacilityCode;
  upgradeStartedAt?: number;
  planetId?: string;
}
