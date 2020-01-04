import getProductionPerHour from './get-production-per-hour';
import PlanetResource from '../planet/planet-resource.interface';

const HOUR_IN_MS = 1000 * 60 * 60;

interface Params {
  resource: PlanetResource;
  from: number;
  to: number;
}

export default ({ resource, from, to }: Params): number => {
  if (from > to) {
    throw new Error('"from" date is higher than "to" date');
  }

  const hours = (to - from) / HOUR_IN_MS;
  return resource.value + getProductionPerHour(resource) * hours;
};
