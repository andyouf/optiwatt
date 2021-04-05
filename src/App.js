import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

import Test from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  )
}

export default App;
