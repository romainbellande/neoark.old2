import FacilityCostItem from './facility-cost-item.interface';
import FacilityProductionItem from './facility-production-item.interface';
import FacilityCode from './facility-code.enum';

export default interface Facility {
  name: string;
  level: number;
  description: string;
  cost: FacilityCostItem[];
  production: FacilityProductionItem[];
  code: FacilityCode;
}
