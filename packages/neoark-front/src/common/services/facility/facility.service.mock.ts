import FacilityService from './facility.service.interface';
import Database from '../../database/database.model';

const db = new Database();

const facilityService: FacilityService = {
  getFacilities: () => db.facilities.toArray(),
};

export default facilityService;
