import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import { HomePage } from './pages/HomePage/HomePage.component'
import ShopPage from './pages/ShopPage/ShopPage.component'

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
