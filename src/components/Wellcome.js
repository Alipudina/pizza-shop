import React, {Component} from 'react';
import wellcomePhoto from '../img/wellcome-photo.jpg';
import wellcomePizza from '../img/wellcome-pizza.jpg';
import wellcomeSalad from '../img/wellcome-salad.jpg';
import wellcomeBurger from '../img/wellcome-burger.jpg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DownIcon } from '../img/SVG/chevron-thin-left.svg';


export default class Wellcome extends Component {
  render() {
    return(
      <div className="wellcome">
        <div className="wellcome__title-container">
          <h3 className="wellcome__title">
            Wellcome to your Pizza Shop. Try our delicious foods now!
          </h3>
        </div>

        <div className="wellcome__img-container">
          <img src={wellcomePhoto} alt="" className="wellcome__img" />
        </div>

        <div className="wellcome__products">
          <h2 className="wellcome__products__title confirm__thank">Please select your Food?</h2>
          <DownIcon className="wellcome__products__icon" />
          <DownIcon className="wellcome__products__icon" />
          <DownIcon className="wellcome__products__icon" />
          <div className="wellcome__products__menu">
            <img src={wellcomePizza} alt="" className="wellcome__products__img"/>
            <NavLink to="/products/pizzas" className="wellcome__products__text">Pizzas</NavLink>
          </div>

          <div className="wellcome__products__menu">
            <img src={wellcomeBurger} alt="" className="wellcome__products__img"/>
            <NavLink to="/products/burgers" className="wellcome__products__text">Burgers</NavLink>
          </div>

          <div className="wellcome__products__menu">
            <img src={wellcomeSalad} alt="" className="wellcome__products__img"/>
            <NavLink to="/products/salads" className="wellcome__products__text">Salads</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
