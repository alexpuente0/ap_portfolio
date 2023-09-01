import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { BubblyContainer } from 'react-bubbly-transitions';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import Projects from './components/projects';
import Toolbox from './components/stack';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />

        <BubblyContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Toolbox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
