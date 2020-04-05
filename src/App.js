import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.component'


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
