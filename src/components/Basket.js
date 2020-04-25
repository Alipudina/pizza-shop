import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toSubmit, handelDelete } from '../Redux/redux';

class Basket extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {orderSubmitted: false};
  //   this.submitOrder = this.submitOrder.bind(this);
  // }
  //
  // submitOrder(ev) {
  //   this.setState({orderSubmitted: true});
  // }
  //
  // componentWillUnmount() {
  //   this.setState({orderSubmitted: false});
  // }


  render() {
    return (
      <div className="basket">
        <h2 className="basket__title">You have <b style={{color: 'green', fontSize: '3.5rem'}}>{this.props.numberOfOrder}</b> Orders!</h2>
        {this.props.readyBasket.map((elem, index) => {
          return (
            <div className="basket__orders-container" key={index}>
              <h5>You have ordered <b>{elem.quantity}</b> <u>{elem.product}</u> and it costs <b>{(elem.quantity*elem.price).toFixed(2)}€</b></h5>
              <button type="button" className="" onClick={this.props.handelDelete} deletebutton={index}>Cancel Order</button>
            </div>
          )
        })}

        <div className="basket__price-container">
          <h5>Total price:<b>&nbsp;{this.props.readyBasket.reduce((a, b) => a+b.quantity*b.price, 0).toFixed(2)}€</b></h5>
          <hr className="h-10"/>
          {this.props.toBeCounted && <span></span>}
        </div>


        <button className="basket__submit-btn" onClick={this.props.toSubmit}>Submit order</button>
        {this.props.emptyBasket && <div className="basket__empty alert alert-danger mt-5 bounceIn" role="alert"> <strong>Oh !!! &nbsp;</strong> Your basket is empty.</div>}
        {this.props.orderSubmitted && <Redirect to="/confirmation" />}
        <div className="basket__bottom-height"></div>
      </div>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return {
    toSubmit: ev => dispatch(toSubmit(ev)),
    handelDelete: ev => dispatch(handelDelete(ev))
 }
}

const mapStateToProps = state => {
  return {
    readyBasket: state.basket,
    orderSubmitted: state.orderSubmitted,
    emptyBasket: state.emptyBasket,
    numberOfOrder: state.basketNumber
  };
}

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);
