import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {PizzaContainer} from './Pizzas';
import { SaladsContainer } from './Salads';
import { BurgersContainer } from './Burgers';

class ProductLinks extends Component {
  render() {
    return (
      <ul className="productsNavbar">
        <li className="productsNavbar__item">
          <NavLink className="productsNavbar__link" to="/products/pizzas">Pizzas</NavLink>
          <span className="productsNavbar__border-bottom"></span>
        </li>
        <li className="productsNavbar__item">
          <NavLink className="productsNavbar__link" to="/products/burgers">Burgers</NavLink>
          <span className="productsNavbar__border-bottom"></span>
        </li>
        <li className="productsNavbar__item">
          <NavLink className="productsNavbar__link" to="/products/salads">Salads</NavLink>
          <span className="productsNavbar__border-bottom"></span>
        </li>
      </ul>
    )
  }
}

class ProductPage extends Component {
  render() {
    return <h2 className="title">This is the all products page</h2>;
  }
}

export default class Products extends Component {
  render() {
    return (
      <>
        <ProductLinks />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/products/pizzas" component={PizzaContainer} />
        <Route path="/products/burgers" component={BurgersContainer}/>
        <Route path="/products/salads" component={SaladsContainer}/>
      </>
    )
  }
}
