import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { burgersInfo } from '../config/info';
import { change, increment, decrement, addToOrder } from '../Redux/redux'
import { connect } from 'react-redux';
import Hamburger from '../img/Hamburger.jpg';
import CheeseBurger from '../img/Cheese-Burger.jpg';
import BaconBurger from '../img/Bacon-Burger.jpg';

class Burgers extends Component {
  render() {
    return (
      <div className="singleProduct">
        <h2 className="singleProduct__title confirm__thank">Our Burgers are Delicious!</h2>
        {burgersInfo.map((burger, index) => {
            return (
              <div className="singleProduct__card" key={index}>
                <div className="singleProduct__img-container">
                  {burger.productName==='Hamburger' &&
                    <img src={Hamburger} alt="Hamburger" className="singleProduct__img"/>
                  }

                  {burger.productName==='Cheese Burger' &&
                    <img src={CheeseBurger} alt="CheeseBurger" className="singleProduct__img"/>
                  }

                  {burger.productName==='Bacon Burger' &&
                    <img src={BaconBurger} alt="BaconBurger" className="singleProduct__img"/>
                  }

                </div>
                <h4 className="singleProduct__name" identifier={burger.productName}>{burger.productName}</h4>

                <div className="singleProduct__btns-container">
                  <button className="singleProduct__btn" onClick={this.props.decrement} identity={index}>-</button>
                  <input className="singleProduct__input" type="text" onChange={this.props.changeValue} identity={index} value={this.props['inputValue'+index]}/>
                  <button className="singleProduct__btn" onClick={this.props.increment} identity={index}>+</button>
                  <button className="singleProduct__addToOrder" onClick={this.props.addToOrder} buttoncounter={index} product={burger.productName} price={burger.price}>Add to Order</button>
                </div>

                  <span className="singleProduct__price"><strong>&nbsp;{burger.price}€</strong></span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps= state => {
  return {
    inputValue0: state.pizzaValues[0],
    inputValue1: state.pizzaValues[1],
    inputValue2: state.pizzaValues[2]
  }
}

const mapDispatchToProps= dispatch => {
  return {
    changeValue: ev => dispatch(change(ev)),
    increment: ev => dispatch(increment(ev)),
    decrement: ev => dispatch(decrement(ev)),
    addToOrder: ev => dispatch(addToOrder(ev))
  }
}

export const BurgersContainer= connect(mapStateToProps, mapDispatchToProps)(Burgers);
