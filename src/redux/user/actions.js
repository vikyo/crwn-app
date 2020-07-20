import { UserActionTypes } from "../actionTypes";

// GOOGLE SIGN IN ACTION
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// EMAIL SIGN IN ACTION
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// Check the user persistence
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

// SIGN OUT
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
