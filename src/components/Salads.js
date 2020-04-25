import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { saladsInfo } from '../config/info';
import {change, decrement, increment, addToOrder} from '../Redux/redux';
import Caesars from '../img/Caesars.jpg';
import Pasadena from '../img/Pasadena.jpg';
import Athena from '../img/Athena.jpg';
import { connect } from 'react-redux';

class Salads extends Component {
  render() {
    return (
      <div className="singleProduct">
        <h2 className="singleProduct__title confirm__thank">Choose our salads for a more healthy life!</h2>
        {saladsInfo.map((salad, index) => {
            return (
              <div className="singleProduct__card" key={index}>
                <div className="singleProduct__img-container">
                  {salad.productName==='Pasadena' &&
                    <img src={Pasadena} alt="Pasadena" className="singleProduct__img"/>
                  }

                  {salad.productName==='Caesars' &&
                    <img src={Caesars} alt="Caesars" className="singleProduct__img"/>
                  }

                  {salad.productName==='Athena' &&
                    <img src={Athena} alt="Athena" className="singleProduct__img"/>
                  }

                </div>
                <h4 className="singleProduct__name" identifier={salad.productName}>{salad.productName}</h4>

                <div className="singleProduct__btns-container">
                  <button className="singleProduct__btn" onClick={this.props.decrement} identity={index}>-</button>
                  <input className="singleProduct__input" type="text" onChange={this.props.changeValue} identity={index} value={this.props['inputValue'+ index]}/>
                  <button className="singleProduct__btn" onClick={this.props.increment} identity={index}>+</button>
                  <button className="singleProduct__addToOrder" onClick={this.props.addToOrder} buttoncounter={index} product={salad.productName} price={salad.price}>Add to Order</button>
                </div>
                <span className="singleProduct__price"><strong>&nbsp;{salad.price}€</strong></span>
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
    decrement: ev => dispatch(decrement(ev)),
    increment: ev => dispatch(increment(ev)),
    addToOrder: ev => dispatch(addToOrder(ev))
  }
}

export const SaladsContainer=connect(mapStateToProps, mapDispatchToProps)(Salads);
