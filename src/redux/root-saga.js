import { call, all } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/sagas";
import { userSagas } from "./user/sagas";

export function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}