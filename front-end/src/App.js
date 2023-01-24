import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
      </Switch>
    </div>
  );
}

export default App;
