import FacilityService from './facility.service.interface';
import Database from '../../database/database.model';
import Planet from 'src/common/resources/planet/planet.interface';
import FacilityCode from 'src/common/resources/planet/facility/facility-code.enum';
import DatabaseTables from 'src/common/database/database-tables.enum';

const db = new Database();

const facilityService: FacilityService = {
  scheduleFacilityUpgrade: async (planetId: string, facilityCode: FacilityCode) => {
    const planets = await db.planets.toArray();
    const planet = planets.find(item => item.id === planetId);

    if (!planet) {
      throw new Error(`planet with id ${planetId} doesn't exist`);
    }

    const updatedAt = new Date().getTime();

    const updatedPlanet: Planet = {
      ...planet,
      updatedAt,
      facilities: planet.facilities.map(facility => {
        if (facility.code === facilityCode) {
          return {
            ...facility,
            upgradeStartedAt: updatedAt,
          };
        }
        return facility;
      }),
    };

    await db.table(DatabaseTables.PLANETS).put(updatedPlanet);
    return updatedPlanet;
  },
  upgradeFacility: async (planetId: string, facilityCode: FacilityCode) => {
    const planets = await db.planets.toArray();
    const planet = planets.find(item => item.id === planetId);

    if (!planet) {
      throw new Error(`planet with id ${planetId} doesn't exist`);
    }

    const updatedAt = new Date().getTime();

    const updatedPlanet: Planet = {
      ...planet,
      updatedAt,
      facilities: planet.facilities.map(facility => {
        if (facility.code === facilityCode) {
          return {
            ...facility,
            upgradeStartedAt: undefined,
            level: facility.level + 1,
          };
        }
        return facility;
      }),
    };

    await db.table(DatabaseTables.PLANETS).put(updatedPlanet);
    return updatedPlanet;
  },
};

export default facilityService;
