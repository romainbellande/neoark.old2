import { FacilityCode } from './facility-code.enum';

export interface Facility {
  level: number;
  code: FacilityCode;
  upgradeStartedAt?: number;
  planetId?: string;
}
