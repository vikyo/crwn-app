import { all, takeLatest, call, put } from "redux-saga/effects";

import { UserActionTypes } from "../actionTypes";
import { clearCart } from "./action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
