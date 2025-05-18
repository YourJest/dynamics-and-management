import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const Restriction = {
  COST: 'cost',
  PRODUCTION_VOLUME: 'production-volume',
  UTILIZATION_VOLUME: 'utilization-volume',
  DEMAND_VOLUME: 'demand-volume',
} as const;

type RestrictionType = (typeof Restriction)[keyof typeof Restriction];

const restrictionOptions = [
  {
    type: Restriction.COST,
    text: 'Затраты',
  },
  {
    type: Restriction.PRODUCTION_VOLUME,
    text: 'Объём производства',
  },
  {
    type: Restriction.UTILIZATION_VOLUME,
    text: 'Объёмы утилизации',
  },
  {
    type: Restriction.DEMAND_VOLUME,
    text: 'Объёмы спроса',
  },
];

export const RestrictionSelect = () => {
  const [selectedRestriction, setSelectedRestriction] =
    useState<RestrictionType>(Restriction.COST);
  return (
    <ButtonGroup>
      {restrictionOptions.map((restriction) => (
        <Button
          variant={
            selectedRestriction === restriction.type ? 'contained' : 'outlined'
          }
          onClick={() => setSelectedRestriction(restriction.type)}>
          {restriction.text}
        </Button>
      ))}
    </ButtonGroup>
  );
};
