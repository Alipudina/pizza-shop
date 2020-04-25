import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon} from '../img/SVG/home.svg';
import { ReactComponent as BasketIcon} from '../img/SVG/cart.svg';
import { connect } from 'react-redux';

class StandardNav extends Component {

  render() {
    return(
      <nav className="header">
        <h1 className="header__title">PizzaShop</h1>
        <NavLink className="header__navlink" to="/"><HomeIcon className="header__icons header__home"/></NavLink>
        <NavLink className="header__navlink header__navlink-basket" to="/basket">
          <BasketIcon className="header__icons header__basket"/>
          <span className="header__basketNumber">{this.props.readyBasket}</span>
      </NavLink>

      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    readyBasket: state.basketNumber
  };
}

export const StandardNavContainer = connect(mapStateToProps)(StandardNav);
