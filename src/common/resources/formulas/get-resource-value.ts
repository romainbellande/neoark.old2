const HOUR_IN_MS = 1000 * 60 * 60;

interface Params {
  from: number;
  to: number;
}

interface ParamsV2 {
  from: number;
  to: number;
  value: number;
  productionPerHour: number;
}

export default ({ from, to, value, productionPerHour }: ParamsV2) => {
  if (from > to) {
    throw new Error('"from" date is higher than "to" date');
  }

  const hours = (to - from) / HOUR_IN_MS;
  return value + productionPerHour * hours;
};
