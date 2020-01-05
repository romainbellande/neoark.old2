const HOUR_IN_MS = 1000 * 60 * 60;

interface Params {
  from: number;
  to: number;
}

export default ({ from, to }: Params): number => {
  if (from > to) {
    throw new Error('"from" date is higher than "to" date');
  }

  const hours = (to - from) / HOUR_IN_MS;
  const value = 1000; // TODO: Make this dynamic
  return value + 100 * hours; // TODO: Make this dynamic
};
