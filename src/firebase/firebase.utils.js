// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB3U_NgezO2RxuawxZYphExEDfn34EUsHc",
  authDomain: "crwn-db-ad650.firebaseapp.com",
  databaseURL: "https://crwn-db-ad650.firebaseio.com",
  projectId: "crwn-db-ad650",
  storageBucket: "crwn-db-ad650.appspot.com",
  messagingSenderId: "724281067215",
  appId: "1:724281067215:web:659af7ba4f7b2fa1e519ba",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Adding google sign in using popup window
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// For fetching the data using firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
