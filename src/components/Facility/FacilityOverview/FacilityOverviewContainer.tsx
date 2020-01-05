import React, { useState, FC, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import FacilityOverviewView from './FacilityOverviewView';
import Facility from 'src/common/resources/facility/facility.interface';
import getFacilityUpgradeDuration from 'src/common/resources/formulas/get-facility-upgrade-duration';
import getFacilityCost from 'src/common/resources/formulas/get-facility-cost';
import FacilityProductionItem from 'src/common/resources/facility/facility-production-item.interface';
import getFacilityProduction from 'src/common/resources/formulas/get-facility-production';
import ResourceCode from 'src/common/resources/resource/resource-code.enum';

interface Props extends Facility {
  onUpgrade(): void;
}

const getRemainingDate = (startTimeInMs: number, duration: number): string => {
  const endTimestamp = startTimeInMs + duration;
  return formatDistanceToNow(new Date(endTimestamp), { includeSeconds: true });
};

const getRemainingTimeInMs = (startTimeInMs: number, duration: number): number =>
  startTimeInMs + duration - new Date().getTime();

const getProgress = (startTimeInMs: number, duration: number): number => {
  const remainingTime = getRemainingTimeInMs(startTimeInMs, duration);

  return Math.floor((100 * (duration - remainingTime)) / duration);
};

const FacilityOverviewContainer: FC<Props> = ({ name, level, description, onUpgrade, code, upgradeStartedAt }) => {
  const cost = getFacilityCost(code, level + 1);
  const duration = getFacilityUpgradeDuration(cost);
  const initialProgress = upgradeStartedAt ? getProgress(upgradeStartedAt, duration) : undefined;
  const initialRemainingDate = upgradeStartedAt ? getRemainingDate(upgradeStartedAt, duration) : undefined;
  const facilityProductionMatrix = getFacilityProduction(code, level);
  const production: FacilityProductionItem[] = Object.keys(facilityProductionMatrix).map(resourceCode => ({
    code: resourceCode as ResourceCode,
    amount: facilityProductionMatrix[resourceCode],
  }));

  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(initialProgress);
  const [remainingDate, setRemainingDate] = useState(initialRemainingDate);

  const onExpand = () => setExpanded(!expanded);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (typeof progress === 'number' && upgradeStartedAt) {
      timer = setInterval(() => {
        const newProgress = getProgress(upgradeStartedAt, duration);
        const newRemainingDate = getRemainingDate(upgradeStartedAt, duration);

        if (newProgress > 100) {
          setProgress(undefined);
        } else {
          setProgress(newProgress);
          setRemainingDate(newRemainingDate);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [upgradeStartedAt, cost, progress, duration]);

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
      progress={progress}
      remainingDate={remainingDate}
    />
  );
};

export default FacilityOverviewContainer;
