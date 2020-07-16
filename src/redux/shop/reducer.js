import { ShopActionTypes } from "../actionTypes";

const INITIAL_STATE = {
  collectionItems: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collectionItems: payload };
    default:
      return state;
  }
};

export default shopReducer;
