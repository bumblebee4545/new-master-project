import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});

export const decreaseItem = (id) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: id,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
