import FacilityCostItem from '../planet/facility/facility-cost-item.interface';

export default (cost: FacilityCostItem[]): number =>
  (cost.map(costItem => costItem.amount).reduce((prev, current) => prev + current, 0) / 2500) * 3600000;
