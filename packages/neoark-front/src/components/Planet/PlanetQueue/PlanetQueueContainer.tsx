import React, { FC, useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import PlanetQueueView from './PlanetQueueView';
import CurrentQueueItem from './interfaces/current-queue-item.interface';
import QueueItem from '../../../common/resources/planet/queue-item.interface';
import BasicQueueItem from './interfaces/basic-queue-item.interface';

interface Props {
  list: QueueItem[];
  title: string;
}

const getRemainingTimeInMs = ({ startTimeInMs, duration }: QueueItem): number =>
  startTimeInMs + duration - new Date().getTime();

const getRemainingPercent = (queueItem: QueueItem): number =>
  Math.floor((100 * (queueItem.duration - getRemainingTimeInMs(queueItem))) / queueItem.duration);

const getRemainingDate = (queueItem: QueueItem): string => {
  const endTimestamp = new Date().getTime() + getRemainingTimeInMs(queueItem);
  return formatDistanceToNow(new Date(endTimestamp), { includeSeconds: true });
};

const isQueueFinished = (queueItem: QueueItem): boolean => getRemainingTimeInMs(queueItem) < 0;

const getCurrentQueueItem = (queueItem: QueueItem): CurrentQueueItem => ({
  id: queueItem.id,
  name: queueItem.name,
  nextLevel: queueItem.nextLevel,
  remainingTimeInMs: getRemainingTimeInMs(queueItem),
  remainingPercentage: getRemainingPercent(queueItem),
  remainingDate: getRemainingDate(queueItem),
  isFinished: isQueueFinished(queueItem),
});

const getCleanQueueList = (list: QueueItem[]): BasicQueueItem[] =>
  list.map(({ id, name, nextLevel }) => ({ id, name, nextLevel }));

const PlanetQueueContainer: FC<Props> = ({ title, list = [] }) => {
  const currentQueueItemTmp: CurrentQueueItem | null = list.length > 0 ? getCurrentQueueItem(list[0]) : null;
  const basicListTmp = getCleanQueueList(list.slice(1));

  const [currentQueueItem, setCurrentQueueItem] = useState(currentQueueItemTmp);
  const [basicList, setBasicList] = useState<BasicQueueItem[]>(basicListTmp);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    setBasicList(() => getCleanQueueList(list.slice(1)));

    if (list.length > 0) {
      timer = setInterval(() => {
        const updatedCurrentQueueItem = getCurrentQueueItem(list[0]);
        setCurrentQueueItem(updatedCurrentQueueItem);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [list]);

  return <PlanetQueueView currentQueueItem={currentQueueItem} list={basicList} title={title} />;
};

export default PlanetQueueContainer;
