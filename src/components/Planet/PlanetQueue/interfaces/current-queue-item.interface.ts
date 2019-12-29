import QueueItem from './basic-queue-item.interface';

export default interface CurrentQueueItem extends QueueItem {
  remainingTimeInMs: number;
  remainingPercentage: number;
  remainingDate: string;
  isFinished: boolean;
}
