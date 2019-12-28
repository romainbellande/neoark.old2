import React from 'react';

import PlanetQueue from './PlanetQueueContainer';
import QueueItem from '../../../common/resources/planet/queue-item.interface';

export default { title: 'PlanetQueue', component: PlanetQueue };

const queueList: QueueItem[] = [
  {
    id: '1',
    name: 'Space shuttle site',
    startTimeInMs: new Date().getTime(),
    duration: 10000,
    nextLevel: 10,
  },
  {
    id: '2',
    name: 'Metal mine',
    startTimeInMs: 80,
    duration: 1000000,
    nextLevel: 25,
  },
  {
    id: '3',
    name: 'Refinery',
    startTimeInMs: 80,
    duration: 1000000,
    nextLevel: 12,
  },
];

export const Default = () => <PlanetQueue title="Facilities" list={queueList} />;

export const Empty = () => <PlanetQueue title="Facilities" list={[]} />;
