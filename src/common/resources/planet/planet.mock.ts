import Planet from './planet.interface';

const planetMock: Planet = {
  name: 'Terra',
  diameter: {
    slots: 235,
    usedSlots: 12,
  },
  coordinates: {
    galaxy: 4,
    solarSystem: 13,
    position: 3,
  },
  temperature: {
    from: 12,
    to: 35,
  },
  queues: [
    {
      title: 'Facilities',
      list: [
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
      ],
    },
    {
      title: 'Research',
      list: [
        {
          id: '1',
          name: 'Nuclear power',
          startTimeInMs: new Date().getTime(),
          duration: 250000,
          nextLevel: 10,
        },
      ],
    },
    {
      title: 'Shipyard',
      list: [],
    },
  ],
};

export default planetMock;
