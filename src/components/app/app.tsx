import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { OptimizationResult } from '../optimization-result/optimization-result';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import css from './app.module.scss';

export const App = () => {
  const theme = createTheme({
    cssVariables: true,
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main className={css.DynamicsAndManagement}>
          <Allotment defaultSizes={[100, 100]} vertical>
            <Allotment.Pane>
              <section>
                <OptimizationResult />
              </section>
            </Allotment.Pane>
            <Allotment.Pane>
              <section>
                <Typography>Постановка задачи</Typography>
              </section>
            </Allotment.Pane>
          </Allotment>
        </main>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
