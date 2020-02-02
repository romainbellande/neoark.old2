import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlanetOverview from 'src/components/Planet/PlanetOverview';
import { fetchPlanets, selectCurrentPlanet } from 'src/redux/reducers/planets/planets.reducer';

const PlanetOverviewRouteView = () => {
  const dispatch = useDispatch();
  const currentPlanet = useSelector(selectCurrentPlanet);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      try {
        if (isSubscribed) {
          await dispatch(fetchPlanets());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [dispatch]);

  return currentPlanet ? <PlanetOverview planet={currentPlanet} /> : null;
};

export default PlanetOverviewRouteView;
