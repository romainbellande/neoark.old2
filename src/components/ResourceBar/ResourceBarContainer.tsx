import React, { FC, useState, useEffect } from 'react';

import ResourceBarView from './ResourceBarView';
import PlanetResource from 'src/common/resources/planet/planet-resource.interface';
import getResourceValue from 'src/common/resources/formulas/get-resource-value';

interface Props {
  items: PlanetResource[];
}

const ResourceBarContainer: FC<Props> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState<PlanetResource[]>(items);
  const now = new Date().getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const newItems = currentItems.map(item => ({
        ...item,
        value: getResourceValue({ resource: item, from: now, to: new Date().getTime() }),
      }));

      setCurrentItems(newItems);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentItems, items, now]);

  return <ResourceBarView items={currentItems} />;
};

export default ResourceBarContainer;
