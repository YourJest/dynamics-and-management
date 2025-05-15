import { Typography, Select, MenuItem } from '@mui/material';
import css from './presentation-select.module.scss';
import { useState } from 'react';

const Presentation = {
  CAPITAL_COSTS: 'capital-costs',
  OPERATING_COSTS: 'operating-costs',
  REVENUE: 'revenue',
  CASH_FLOW: 'cash-flow',
  DISCOUNTED_CASH_FLOW: 'discounted-cash-flow',
} as const;

type PresentationType = (typeof Presentation)[keyof typeof Presentation];

export const PresentationSelect = () => {
  const [presentation, setPresentation] = useState<PresentationType>(
    Presentation.CAPITAL_COSTS
  );
  return (
    <div className={css.PresentationSelect}>
      <Typography>Представления: </Typography>
      <Select
        value={presentation}
        onChange={(e) => setPresentation(e.target.value)}
        autoWidth>
        <MenuItem value={Presentation.CAPITAL_COSTS}>
          Капитальные затраты
        </MenuItem>
        <MenuItem value={Presentation.OPERATING_COSTS}>
          Эксплуатационные затраты
        </MenuItem>
        <MenuItem value={Presentation.REVENUE}>Выручка</MenuItem>
        <MenuItem value={Presentation.CASH_FLOW}>Денежный поток</MenuItem>
        <MenuItem value={Presentation.DISCOUNTED_CASH_FLOW}>
          Дисконтированный денежный поток
        </MenuItem>
      </Select>
    </div>
  );
};
