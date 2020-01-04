import PlanetResourceCode from './planet-resource-code.enum';

export default interface PlanetResource {
  label: string;
  value: number;
  level: number;
  code: PlanetResourceCode;
}
