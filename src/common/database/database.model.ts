import Dexie from 'dexie';

import DatabaseTables from './database-tables.enum';
import Planet from '../resources/planet/planet.interface';
import Facility from '../resources/facility/facility.interface';

export default class Database extends Dexie {
  planets: Dexie.Table<Planet, string>;
  facilities: Dexie.Table<Facility, string>;

  constructor() {
    super('Database');

    this.version(1).stores({
      planets: 'id',
      facilities: 'id',
    });

    this.planets = this.table(DatabaseTables.PLANETS);
    this.facilities = this.table(DatabaseTables.FACILITIES);
  }
}
