import { createStore } from 'redux';

const initialState = {
  productValues: [0, 0, 0],
  pizzaValues: [0, 0, 0],
  basket: [],
  total: [],
  orderSubmitted: false,
  emptyBasket: false,
  toCount: false,
  basketNumber: 0
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};
  let numberOfOrder= 0;
  let quantityArray= undefined;
  const basketIcon= document.querySelector('.header__basket');

  switch(action.type) {
    case 'changePizzaValue':
      const pizzaInputIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[pizzaInputIdentity] = parseInt(action.event.target.value);
      // console.log(updatedState);
      return updatedState;
    case 'pizzaIncrement':
      const buttonIncIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[buttonIncIdentity] = state.pizzaValues[buttonIncIdentity] + 1
      return updatedState;
    case 'addPizza':
      const product = action.event.target.getAttribute('product');
      const price = parseFloat(action.event.target.getAttribute('price'));
      const buttonIdentifer = parseInt(action.event.target.getAttribute('buttoncounter'));
      let isIncluded = false;

      for (let i=0; i < state.basket.length; i++) {
        if (product === state.basket[i].product) {
          isIncluded = true;
          state.basket[i].quantity = state.pizzaValues[buttonIdentifer];
          break;
        }
      }

      // for (let item of state.basket) {
      //   if (product === item.product) {
      //     isIncluded = true;
      //     item.quantity =  state.pizzaValues[buttonIdentifer];
      //     break;
      //   }
      // }

      if (!isIncluded) {
        // const pizzaObject = {product: product, price: price, quantity: state.pizzaValues[buttonIdentifer]};
      const buttonIdentifier = parseInt(action.event.target.getAttribute('buttoncounter'));

      // Try to find the item that already is in the basket if exists. No need for loop! Find method loops already.
      const itemFound = updatedState.basket.find(item => item.product === product); // If found will return the object
      // If not an empty object. {} which is a 'falsy' value. Thus itemFound can be used in an if statement directly.

      if (itemFound) {
        // Update only the quantity of this item (object)
        itemFound.quantity = parseInt(updatedState.pizzaValues[buttonIdentifier]);
      } else {
        // push a new item with all the associated info within
        const pizzaObject = {product: product, price: price, quantity: parseInt(updatedState.pizzaValues[buttonIdentifier])};
        updatedState.basket = [...state.basket, pizzaObject];

      }
    }

      updatedState.pizzaValues[buttonIdentifer]=state.productValues[buttonIdentifer];
      // #########################################################################################################
      // adding numberOfOrder
      quantityArray= updatedState.basket.map(elem => elem.quantity);
      
      for (let i=0; i<quantityArray.length; i++) {
        numberOfOrder+=quantityArray[i];
      }
      updatedState.basketNumber= numberOfOrder;

      // //////////////////////////////////////////////
      // basket color
      if (updatedState.basketNumber > 0) {
        basketIcon.style.animation= 'basketColor 1s infinite';
      }
      return updatedState;


    case 'removePizza':
      const buttonDecIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[buttonDecIdentity] <1 ? updatedState.pizzaValues[buttonDecIdentity]=0 : updatedState.pizzaValues[buttonDecIdentity]=state.pizzaValues[buttonDecIdentity] - 1;
      return updatedState;

    case 'submit':
      updatedState.orderSubmitted=state.orderSubmitted = true;
      let intervalFunc= () => {
        return (
          setTimeout(() => {
              updatedState.orderSubmitted=state.orderSubmitted = false;
              updatedState.emptyBasket=false;
              updatedState.basket = [];

          }, 5000)
        )
      }
      intervalFunc();
      if(updatedState.basket.length === 0){
        updatedState.orderSubmitted=state.orderSubmitted = false;
        updatedState.emptyBasket=true;
      }
      updatedState.basketNumber= 0;
      basketIcon.style.animation= '';
      return updatedState;

    case 'delete':
      const deleteIndex= action.event.target.getAttribute('deletebutton');

        const toDelete = Object.assign([], state.basket);
        toDelete.splice(deleteIndex, 1);
        updatedState.basket= toDelete;

        // ##############################################################
        // deleting numberOfOrder
        quantityArray= updatedState.basket.map(elem => elem.quantity);
        // console.log(quantityArray);
        for (let i=0; i<quantityArray.length; i++) {
          numberOfOrder+=quantityArray[i];
        }
        updatedState.basketNumber= numberOfOrder;
        if (updatedState.basketNumber === 0) {
          basketIcon.style.animation= '';
        }

      return updatedState;
    default:
      return state;
  }
}

export const change = ev => {
  return {type: 'changePizzaValue', event: ev}
}

export const increment = ev => {
  return {type: 'pizzaIncrement', event: ev}
}

export const addToOrder = ev => {
  return {type: 'addPizza', event: ev}
}

export const decrement= ev => {
  return {type: 'removePizza', event: ev};
}

export const toSubmit= ev => {
  return {
    type: 'submit',
    event: ev
  }
}

export const handelDelete= ev => {
  return {
    type: 'delete',
    event: ev
  }
}


export const store = createStore(reducer);
