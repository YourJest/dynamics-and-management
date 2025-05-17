import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import {
  mockOptimizationResultData,
  type OptimizationResultType,
} from '../../mocks/optimization-result';

interface ResultsSlice {
  resultsData: OptimizationResultType[];
  incomeLength: number;
}

const initialState: ResultsSlice = {
  resultsData: mockOptimizationResultData,
  incomeLength: 11,
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setIncomeLength: (state, action: PayloadAction<number>) => {
      state.incomeLength = action.payload;
    },
  },
  selectors: {
    getIncomeLength: (state) => state.incomeLength,
    getResults: createSelector(
      [(state) => state.resultsData, (state) => state.incomeLength],
      (resultsData: OptimizationResultType[], incomeLength: number) =>
        resultsData.map((result) => ({
          ...result,
          income: result.income.slice(0, incomeLength),
        }))
    ),
  },
});

export const { setIncomeLength } = resultsSlice.actions;

export const { getIncomeLength, getResults } = resultsSlice.selectors;
