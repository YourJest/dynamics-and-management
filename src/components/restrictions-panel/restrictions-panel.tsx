import { ProblemStatementSelect } from '../problem-statement-select/problem-statement-select';
import { RestrictionSelect } from '../restriction-select/restriction-select';
import css from './restrictions-panel.module.scss';

export const RestrictionsPanel = () => {
  return (
    <div className={css.RestrictionsPanel}>
      <div>
        <ProblemStatementSelect />
        <RestrictionSelect />
      </div>
    </div>
  );
};
