// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext();

const initialState = {
  cart: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item is already in cart
      const isInCart = state.cart.find(item => item.ProductID === action.product.ProductID);
      if (isInCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.ProductID === action.product.ProductID ? { ...item, qty: item.qty + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, qty: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.ProductID !== action.id)
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
