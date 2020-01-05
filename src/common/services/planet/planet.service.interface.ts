import Planet from 'src/common/resources/planet/planet.interface';

export default interface PlanetService {
  getPlanets(): Promise<Planet[]>;
}
