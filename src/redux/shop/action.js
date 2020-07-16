import { ShopActionTypes } from "../actionTypes";

export const updateCollections = (collectionObject) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionObject,
  };
};
