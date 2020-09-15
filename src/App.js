import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import CoinsBoard from './components/CoinsBoard';
import Info from './pages/Info';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Switch> 
        <Route path="/info" component={Info}/>
        <Route path="/" component={CoinsBoard}/>
      </Switch>
    </Router>
  );
}

export default App;
