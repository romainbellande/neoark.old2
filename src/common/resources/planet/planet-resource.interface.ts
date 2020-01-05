import ResourceCode from '../resource/resource-code.enum';

export default interface PlanetResource {
  label: string;
  value: number;
  level: number;
  code: ResourceCode;
}
