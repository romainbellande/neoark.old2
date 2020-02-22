import PlanetDiameter from './planet-diameter.interface';
import PlanetCoordinates from './planet-coordinates.interface';
import PlanetTemperature from './planet-temperature.interface';
import PlanetQueue from './planet-queue.interface';
import Resource from '../resource/resource.interface';
import Facility from './facility/facility.interface';

export default interface Planet {
  id?: string;
  name: string;
  diameter: PlanetDiameter;
  coordinates: PlanetCoordinates;
  temperature: PlanetTemperature;
  queues: PlanetQueue[];
  resources: Resource[];
  updatedAt: number;
  facilities: Facility[];
}
