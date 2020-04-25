import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { pizzasInfo } from '../config/info';
import { connect } from 'react-redux';
import { change, increment, addToOrder,decrement } from '../Redux/redux';
import SalamiPizza from '../img/Salami-Pizza.jpg';
import HawaianPizza from '../img/Hawaian-Pizza.jpg';
import DiavolaPizza from '../img/Diavola-Pizza.jpg';

class Pizzas extends Component {
  render() {
    return (
      <div className="singleProduct">
        <h2 className="singleProduct__title confirm__thank">Choose one of these lovely Pizzas!</h2>
        {pizzasInfo.map((pizza, index) => {
            return (
              <div className="singleProduct__card" key={index}>
                <div className="singleProduct__img-container">
                  {pizza.productName==='Hawaian Pizza' &&
                    <img src={HawaianPizza} alt="HawaianPizza" className="singleProduct__img"/>
                  }

                  {pizza.productName==='Salami Pizza' &&
                    <img src={SalamiPizza} alt="SalamiPizza" className="singleProduct__img"/>
                  }

                  {pizza.productName==='Diavola Pizza' &&
                    <img src={DiavolaPizza} alt="DiavolaPizza" className="singleProduct__img"/>
                  }

                </div>
                <h4 className="singleProduct__name">{pizza.productName}</h4>

                <div className="singleProduct__btns-container">
                  <button className="singleProduct__btn" onClick={this.props.decrement} identity={index}>-</button>
                  <input className="singleProduct__input" type="number" onChange={this.props.changeValue} identity={index} value={this.props['pizzaValue'+index]}/>
                  <button className="singleProduct__btn" onClick={this.props.increment} identity={index}>+</button>
                  <button buttoncounter={index} product={pizza.productName} price={pizza.price} className="singleProduct__addToOrder" onClick={this.props.addToOrder}>Add to Order</button>
                </div>

                <span className="singleProduct__price"><strong>&nbsp;{pizza.price}€</strong></span>

              </div>
            )
          })
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pizzaValue0: state.pizzaValues[0],
    pizzaValue1: state.pizzaValues[1],
    pizzaValue2: state.pizzaValues[2]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(change(ev)),
    increment: ev => dispatch(increment(ev)),
    addToOrder: ev => dispatch(addToOrder(ev)),
    decrement: ev => dispatch(decrement(ev))
  }
}

export const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizzas)
