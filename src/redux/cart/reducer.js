import { CartActionTypes } from "../actionTypes";
import { addItemToCart } from "./utils";

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
    default:
      return state;
  }
};

export default cartReducer;
