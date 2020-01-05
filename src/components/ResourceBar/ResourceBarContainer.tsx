import React, { FC, useState, useEffect } from 'react';

import ResourceBarView from './ResourceBarView';
import getResourceValue from 'src/common/resources/formulas/get-resource-value';
import Resource from 'src/common/resources/resource/resource.interface';

interface Props {
  items: Resource[];
}

const ResourceBarContainer: FC<Props> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState<Resource[]>(items);
  const now = new Date().getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const newItems = currentItems.map(item => ({
        ...item,
        amount: getResourceValue({ from: now, to: new Date().getTime() }),
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
