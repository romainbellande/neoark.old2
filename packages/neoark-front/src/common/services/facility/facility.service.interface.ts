import Facility from '../../resources/facility/facility.interface';

export default interface FacilityService {
  getFacilities(planetId: string): Promise<Facility[]>;
}
