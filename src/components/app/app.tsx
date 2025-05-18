import { createTheme, ThemeProvider } from '@mui/material';
import { OptimizationResult } from '../optimization-result/optimization-result';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import css from './app.module.scss';
import { RestrictionsPanel } from '../restrictions-panel/restrictions-panel';

export const App = () => {
  const theme = createTheme({
    cssVariables: true,
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={css.DynamicsAndManagement}>
          <Allotment defaultSizes={[50, 50]} vertical>
            <Allotment.Pane minSize={250}>
              <OptimizationResult />
            </Allotment.Pane>
            <Allotment.Pane minSize={250}>
              <RestrictionsPanel />
            </Allotment.Pane>
          </Allotment>
        </main>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
