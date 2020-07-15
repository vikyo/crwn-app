import { collectionItems } from "./data";

const INITIAL_STATE = {
  collectionItems: collectionItems,
};

const shopReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
