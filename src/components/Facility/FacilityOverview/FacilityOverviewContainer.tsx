import React, { useState, FC } from 'react';

import FacilityOverviewView from './FacilityOverviewView';
import Facility from 'src/common/resources/facility/facility.interface';

interface Props extends Facility {
  onUpgrade(): void;
}

const FacilityOverviewContainer: FC<Props> = ({ name, level, description, production, cost, onUpgrade, code }) => {
  const [expanded, setExpanded] = useState(false);

  const onExpand = () => setExpanded(!expanded);

  return (
    <FacilityOverviewView
      name={name}
      level={level}
      description={description}
      expanded={expanded}
      onExpand={onExpand}
      production={production}
      cost={cost}
      onUpgrade={onUpgrade}
      code={code}
    />
  );
};

export default FacilityOverviewContainer;
