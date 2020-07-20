import { CartActionTypes } from "../actionTypes";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
} from "./utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // Toggling the dropdown
    case CartActionTypes.TOGGLE_CART_DROP_DOWN:
      return { ...state, hidden: !state.hidden };
    // Adding the items in the cart
    case CartActionTypes.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    // Removing the item from cart
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    // Decrease the item quantity
    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, payload),
      };
    // Clear cart on sign out
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        hidden: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
