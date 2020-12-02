import React from 'react';

const initialState = {
  isDrawerOpen: false,
  cartItems: {},
  currency: 'USD'
};


const cartReducer = (state, action) => {
  const getItemCartData = (item) => {
    if (!state.cartItems[item.id]) {
      return {
        quantity: 1,
        data: item
      }
    } else {
      return {
        ...state.cartItems[item.id],
        quantity: state.cartItems[item.id]['quantity'] + 1
      }
    }
  }

  const getReducedItems = (item) => {
    if (state.cartItems[item.id]['quantity'] === 1) {
      const cartItems = state.cartItems
      delete cartItems[item.id]
      return cartItems
    } else {
      return {
        ...state.cartItems,
        [item.id]: {
          ...state.cartItems[item.id],
          quantity: state.cartItems[item.id]['quantity'] - 1
        }
      }
    }
  }

  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        isDrawerOpen: false
      };
    case 'OPEN_DRAWER':
      return {
        ...state,
        isDrawerOpen: true
      };
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.item.id]: getItemCartData(action.item)
        }
      }
    case 'REDUCE_CART_ITEM':
      return {
        ...state,
        cartItems: getReducedItems(action.item)
      }
    case 'CHANGE_CURRENCY':
      return {
        ...state,
        currency: action.currency
      }
    default:
      return state;
  }
};

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
