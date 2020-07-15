import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import directoryReducer from "./directory/reducer";
import shopReducer from "./shop/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // cart reducer state will be persisted, user is persisted in firebase , so no need to give here
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
