import { CartActionTypes } from "../actionTypes";

// to toggle the cart dropdown
export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
  };
};

// to add the item in the cart
export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

// For removing the item from cart entirely, in the tutorial it is clearItemFromCart
export const removeItem = (itemId) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemId,
  };
};

// to decrease the quantity of the item in the cart, in tutorial it is removeItem
export const decreaseItem = (item) => {
  return {
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item,
  };
};

// Remove an item from cart
export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

// Empty the entire cart
export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
