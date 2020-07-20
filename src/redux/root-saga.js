import { call, all } from "redux-saga/effects";

import { userSagas } from "./user/sagas";
import { cartSagas } from "./cart/sagas";
import { shopSagas } from "./shop/sagas";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
