import { Select, type SelectProps } from '../select/select';

const ProblemStatement = {
  ANNUAL_INCREASE: 'annual-increase',
} as const;

type ProblemStatementType =
  (typeof ProblemStatement)[keyof typeof ProblemStatement];

const options: SelectProps<ProblemStatementType>['options'] = [
  {
    value: ProblemStatement.ANNUAL_INCREASE,
    text: 'Ежегодный прирост запасов газа 400',
  },
];

export const ProblemStatementSelect = () => {
  return (
    <Select
      label='Постановка задачи:'
      initialValue={ProblemStatement.ANNUAL_INCREASE}
      options={options}
    />
  );
};
