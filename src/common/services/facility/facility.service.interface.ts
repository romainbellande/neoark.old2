import Planet from 'src/common/resources/planet/planet.interface';

export default interface FacilityService {
  scheduleFacilityUpgrade(planetId: string, facilityId: string): Promise<Planet>;
  upgradeFacility(planetId: string, facilityId: string): Promise<Planet>;
}
