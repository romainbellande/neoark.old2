import { Resource } from './resource.resource';
import { Facility } from './facility.resource';

export interface Planet {
  id: string;
  name: string;
  slots: number;
  usedSlots: number;
  galaxyPos: number;
  solarSystemPos: number;
  fromSunPos: number;
  fromTemp: number;
  toTemp: number;
  resources: Resource[];
  facilities: Facility[];
  updatedAt: number;
  createdAt: number;
}
