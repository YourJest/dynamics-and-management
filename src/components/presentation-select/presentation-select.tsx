import { Select } from '../select/select';

const Presentation = {
  CAPITAL_COSTS: 'capital-costs',
  OPERATING_COSTS: 'operating-costs',
  REVENUE: 'revenue',
  CASH_FLOW: 'cash-flow',
  DISCOUNTED_CASH_FLOW: 'discounted-cash-flow',
} as const;

type PresentationType = (typeof Presentation)[keyof typeof Presentation];

const options: { value: PresentationType; text: string }[] = [
  { value: Presentation.CAPITAL_COSTS, text: 'Капитальные затраты' },
  { value: Presentation.OPERATING_COSTS, text: 'Эксплуатационные затраты' },
  { value: Presentation.REVENUE, text: 'Выручка' },
  { value: Presentation.CASH_FLOW, text: 'Денежный поток' },
  {
    value: Presentation.DISCOUNTED_CASH_FLOW,
    text: 'Дисконтированный денежный поток',
  },
];

export const PresentationSelect = () => {
  return (
    <Select
      label='Представления:'
      initialValue={Presentation.CAPITAL_COSTS}
      options={options}
    />
  );
};
