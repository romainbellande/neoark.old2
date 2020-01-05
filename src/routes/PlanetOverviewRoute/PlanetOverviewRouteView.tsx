import React, { useState, useEffect } from 'react';

import PlanetOverview from 'src/components/Planet/PlanetOverview';
import planetService from 'src/common/services/planet';
import Planet from 'src/common/resources/planet/planet.interface';

const PlanetOverviewRouteView = () => {
  const [planet, setPlanet] = useState<Planet>();

  useEffect(() => {
    let isSubscribed = true;
    planetService.getPlanets().then(planets => {
      if (isSubscribed) {
        setPlanet(planets[0]);
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, []);

  return planet ? <PlanetOverview planet={planet} /> : null;
};

export default PlanetOverviewRouteView;
