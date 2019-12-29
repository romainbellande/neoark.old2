import PlanetDiameter from './planet-diameter.interface';
import PlanetCoordinates from './planet-coordinates.interface';
import PlanetTemperature from './planet-temperature.interface';
import PlanetQueue from './planet-queue.interface';

export default interface Planet {
  name: string;
  diameter: PlanetDiameter;
  coordinates: PlanetCoordinates;
  temperature: PlanetTemperature;
  queues: PlanetQueue[];
}
