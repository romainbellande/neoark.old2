import { ResourceCode } from './resource-code.enum';

export interface Resource {
  code: ResourceCode;
  amount: number;
}
