import PlanetService from './planet.service.interface';
import Database from '../../database/database.model';

const db = new Database();

const planetService: PlanetService = {
  getPlanets: () => db.planets.toArray(),
};

export default planetService;
