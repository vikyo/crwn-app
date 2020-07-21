import { ShopActionTypes } from "../actionTypes";

const INITIAL_STATE = {
  collectionItems: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collectionItems: payload };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };
    default:
      return state;
  }
};

export default shopReducer;
