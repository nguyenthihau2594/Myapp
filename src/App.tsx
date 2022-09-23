import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import List from './components/pages/Listpage/Listpage';
import Guide from './components/pages/Guide/Guide';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/guide" component={Guide} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
