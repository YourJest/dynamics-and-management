import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import { OptimizationResult } from './components/optimization-result/optimization-result';

function App() {
  const theme = createTheme({
    cssVariables: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <main>
        <section>
          <OptimizationResult />
        </section>
        <section></section>
      </main>
    </ThemeProvider>
  );
}

export default App;
