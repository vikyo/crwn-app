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
      // Using firebase REST api calls and fetch
      /* fetch(
      "https://firestore.googleapis.com/v1/projects/crwn-db-ad650/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((data) => console.log(data)); */

      // Using Promise get,then syntax
      /*  collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollectionsFunction(collectionsMap);
      this.setState({ loading: false });
    }); */
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

export { fetchCollectionsStartAsync };
