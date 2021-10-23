import Box from '@mui/material/Box';

import ColorModeProvider from './store/ColorModeProvider';

import Todos from './components/Todos';
import ThemeChanger from './components/ThemeChanger';

import './App.scss';

function App() {
  return (
    <ColorModeProvider>
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <h1>YATA!</h1>
        <Todos />
        <ThemeChanger />
      </Box>
    </ColorModeProvider>
  );
}

export default App;
