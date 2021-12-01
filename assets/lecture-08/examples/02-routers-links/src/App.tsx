import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

import Menu from './components/Menu';

import './App.scss';

const App = () => (
  <>
    <h1>Welcome to my site!</h1>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;
