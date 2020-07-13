import { TOGGLE_CART_DROP_DOWN } from "../actionTypes";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_CART_DROP_DOWN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
