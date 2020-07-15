import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// Mapping routeNames or keys to number ids
const COLLECTION_MAP_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

// returns shop slice from redux state
const selectShop = (state) => state.shop;

// returns shop.collectionItems array
export const selectCollectionItems = createSelector(
  [selectShop],
  (shop) => shop.collectionItems
);

// // L136 section11
// returns the hats or sneakers or etc based on the url params in routing and mapped in the  COLLECTION_MAP_ID
export const selectCollection = memoize((collectionUrlParams) => {
  return createSelector([selectCollectionItems], (collectionItems) => {
    return collectionItems.find(
      (collectionItem) =>
        // collectionItem.id === COLLECTION_MAP_ID[collectionUrlParams]
        collectionItem.routeName === collectionUrlParams
    );
  });
});

// above function written without return and {}
// export const selectCollection = memoize((collectionUrlParams) =>
//   createSelector([selectCollectionItems], (collectionItems) =>
//     collectionItems.find(
//       (collectionItem) =>
//         collectionItem.id === COLLECTION_MAP_ID[collectionUrlParams]
//       // collectionItem.routeName === collectionUrlParams
//     )
//   )
// );
