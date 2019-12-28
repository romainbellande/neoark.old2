import React, { FC } from 'react';

import SummaryItem from './summary-item.interface';
import Planet from 'src/common/resources/planet/planet.interface';
import PlanetSummaryView from './PlanetSummaryView';

interface Props {
  planet: Planet;
}

const summaryListFromPlanet = (planet: Planet): SummaryItem[] => {
  return [
    {
      key: 'Diameter',
      value: `17.612km (${planet.diameter.usedSlots}/${planet.diameter.slots})`,
    },
    {
      key: 'Temperature',
      value: `${planet.temperature.from} °C to ${planet.temperature.to} °C`,
    },
    {
      key: 'Coordinates',
      value: `[${planet.coordinates.galaxy}:${planet.coordinates.solarSystem}:${planet.coordinates.position}]`,
    },
  ];
};

const PlanetSummaryContainer: FC<Props> = ({ planet }) => {
  const summaryList = summaryListFromPlanet(planet);
  return <PlanetSummaryView list={summaryList} />;
};

export default PlanetSummaryContainer;
