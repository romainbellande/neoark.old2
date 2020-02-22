import Dexie from 'dexie';

import DatabaseTables from './database-tables.enum';
import Planet from '../resources/planet/planet.interface';

export default class Database extends Dexie {
  planets: Dexie.Table<Planet, string>;

  constructor() {
    super('Database');

    this.version(1).stores({
      planets: 'id',
    });

    this.planets = this.table(DatabaseTables.PLANETS);
  }
}
