import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// returns shop slice from redux state
const selectShop = (state) => state.shop;

// returns shop.collectionItems array
export const selectCollectionItems = createSelector(
  [selectShop],
  (shop) => shop.collectionItems
);

// State normalization selector, creating the array of values from the object
// i.e {hats:{id:1,title:hats},sneakers:{id:2,title:sneakers}} converted to [{id:1,title:hats},,sneakers:{id:2,title:sneakers}]
export const selectCollectionsForPreview = createSelector(
  [selectCollectionItems],
  (collectionItems) =>
    Object.keys(collectionItems).map((key) => collectionItems[key])
);

// L136 section11
// we need memoize here because we are not creating selector but a normal function with url params

// export const selectCollection = memoize((collectionUrlParams) => {
//   return createSelector([selectCollectionItems], (collectionItems) => {
//     return collectionItems[collectionUrlParams];
//   });
// });

// above function written without return and {}
export const selectCollection = memoize((collectionUrlParams) =>
  createSelector(
    [selectCollectionItems],
    (collectionItems) => collectionItems[collectionUrlParams] // select the collections items based upon url params
  )
);
