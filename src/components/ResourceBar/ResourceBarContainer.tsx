import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ResourceBarView from './ResourceBarView';
import getResourceValue from 'src/common/resources/formulas/get-resource-value';
import Resource from 'src/common/resources/resource/resource.interface';
import { selectProductionMatrix } from 'src/redux/reducers/planets/facilities.reducer';
import { selectCurrentPlanet } from 'src/redux/reducers/planets/planets.reducer';
import ResourceEnum from 'src/common/resources/resource/resource-code.enum';

const ResourceBarContainer: FC = () => {
  const currentPlanet = useSelector(selectCurrentPlanet);
  if (!currentPlanet) {
    throw new Error('current planet is not set');
  }
  const items = currentPlanet.resources;
  const [currentItems, setCurrentItems] = useState<Resource[]>(items);
  const now = currentPlanet.updatedAt;
  const productMatrix = useSelector(selectProductionMatrix);

  useEffect(() => {
    const initialItemAmount = (code: ResourceEnum) => {
      const item = items.find(item => item.code === code);
      return item ? item.amount : 0;
    };
    const timer = setInterval(() => {
      const newItems = currentItems.map(item => ({
        ...item,
        amount: getResourceValue({
          from: now,
          to: new Date().getTime(),
          value: initialItemAmount(item.code),
          productionPerHour: productMatrix[item.code],
        }),
      }));
      setCurrentItems(newItems);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentPlanet, currentItems, items, now, productMatrix]);

  return <ResourceBarView items={currentItems} />;
};

export default ResourceBarContainer;
