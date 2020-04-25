import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { StandardNavContainer } from './components/StandardNav.js';
import Home from './components/Home';
import { BasketContainer } from './components/Basket';
import Products from './components/Products';
import Confirm from './components/Confirm';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">
          <StandardNavContainer />
          <div className="">
            <Route path="/" exact component={Home} />
            <Route path="/basket" component={BasketContainer}/>
            <Route path="/products" component={Products}/>
            <Route path="/confirmation" component={Confirm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
