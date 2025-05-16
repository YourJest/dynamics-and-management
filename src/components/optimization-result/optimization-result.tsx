import { PresentationSelect } from '../presentation-select/presentation-select';
import css from './optimization-result.module.scss';
import { ResultTable } from './result-table/result-table';

export const OptimizationResult = () => {
  return (
    <div className={css.OptimizationResult}>
      <PresentationSelect />
      <ResultTable incomeLength={11} />
    </div>
  );
};
