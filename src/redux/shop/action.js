import { ShopActionTypes } from "../actionTypes";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

// SYNCHRONOUS ACTION CREATORS
const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};
const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

const fetchCollectionsFailure = (error) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error.message,
  };
};

// ASYNCHRONOUS ACTION CREATORS
const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCollectionsStart());
      const collectionRef = firestore.collection("collections");
      const snapShotObject = collectionRef.get();
      const collectionsSnapshot = await snapShotObject;
      const collectionsMap = convertCollectionsSnapshotToMap(
        collectionsSnapshot
      );
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error));
    }
  };
};

export {
  fetchCollectionsStart,
  fetchCollectionsStartAsync,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
};
