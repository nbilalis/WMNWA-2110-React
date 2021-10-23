import React from 'react';
import ReactDOM from 'react-dom';

import { StyledEngineProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
