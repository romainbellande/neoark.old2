import Dexie from 'dexie';
import uuidv1 from 'uuid/v1';

import Database from './database.model';
import DatabaseTables from './database-tables.enum';
import planetMock from '../resources/mocks/planet.mock';
import facilitesMock from '../resources/mocks/facilities.mock';

const injectWithUUID = (obj: any) => ({ ...obj, id: uuidv1() });

export default () => {
  Dexie.delete('Database');
  const database = new Database();

  database.table(DatabaseTables.PLANETS).put(injectWithUUID(planetMock));
  facilitesMock.forEach(facilityMock => database.table(DatabaseTables.FACILITIES).put(injectWithUUID(facilityMock)));
};
