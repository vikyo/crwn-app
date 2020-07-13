import { CartActionTypes } from "../actionTypes";

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};
