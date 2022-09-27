import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import List from './components/pages/Listpage/Listpage';
import Guide from './components/pages/Guide/Guide';
import Home from './components/pages/Home/Home';
import About from './components/pages/About';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
