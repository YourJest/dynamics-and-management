export type OptimizationResultType = {
  result: 'good' | 'bad';
  stage: 1 | 2 | 3;
  name: string;
  searchStart?: number;
  explorationStart?: number;
  investmentStart: number;
  productionStart: number;
  income: number[];
};

export const mockOptimizationResultData: OptimizationResultType[] = [
  {
    result: 'bad',
    stage: 1,
    name: 'Абаканский',
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2051,
    income: [0, 0, 0, 0, 0, 0, 0, 38.9, 0, 0, 10],
  },
  {
    result: 'good',
    stage: 2,
    name: 'Амдерминский уч. недр фед. знач.',
    searchStart: 2049,
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2056,
    income: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    result: 'bad',
    stage: 3,
    name: 'Абаканский',
    searchStart: 2049,
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2049,
    income: [0, 0, 0, 0, 0, 0, 0, 38.9, 0, 0, 10],
  },
  {
    result: 'good',
    stage: 1,
    name: 'Абаканский',
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2049,
    income: [0, 0, 0, 0, 0, 0, 0, 38.9, 0, 0, 10],
  },
  {
    result: 'good',
    stage: 1,
    name: 'Абаканский',
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2049,
    income: [0, 0, 0, 0, 0, 0, 0, 38.9, 0, 0, 10],
  },
  {
    result: 'good',
    stage: 1,
    name: 'Абаканский',
    explorationStart: 2049,
    investmentStart: 2049,
    productionStart: 2049,
    income: [0, 0, 0, 0, 0, 0, 0, 38.9, 0, 0, 10],
  },
];
