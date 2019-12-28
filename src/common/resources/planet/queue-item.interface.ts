export default interface QueueItem {
  id: string;
  name: string;
  startTimeInMs: number;
  duration: number;
  nextLevel: number;
}
