/* Firebase App (the core Firebase SDK) is always required and
must be listed before other Firebase SDKs */
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

// Adding google sign in using popup window
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// For fetching the data using firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Getting the user reference using the uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // for multiline comment ctrl+shift+a

  /* operations of collection refs
  const collectionRef = firestore.collection(`users`);
  const collectionSnapshot = await collectionRef.get();
  console.log({
    collection: collectionSnapshot.docs.map((data) => data.data()),
  }); */
  // Getting the user snapshot object from that userRef
  const snapShot = await userRef.get();

  // get the data of user stored in the snapshot, will not work if snapshot does not exist
  // snapShot.data()

  // snapshot for new user will not be there so no snapshot if user sign up first time
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // create a user document for the first time user
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

// SHOP DATA UPLOAD UTILITY
export const addCollectionAndDocumentsToFirestore = async (
  collectionKey,
  objectsToAdd
) => {
  // create the collection using collection key
  const collectionRef = firestore.collection(collectionKey);

  // for batch updation so that if uploading fails mid way, firebase can handle it
  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  return await batch.commit(); // returns a promise and returns a null value when batch succeed
};

// for mapping the data and adding routeName and id, this function returns mappedArrayToObject object
export const convertCollectionsSnapshotToMap = (collections) => {
  const collectionsSnapshot = collections.docs;
  // console.log(collectionsSnapshot);
  const transformedCollectionArray = collectionsSnapshot.map((itemSnapshot) => {
    const { title, items } = itemSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      items,
      title,
      id: itemSnapshot.id,
    };
  });
  //Changing array of objects into object of objects
  const mappedArrayToObject = transformedCollectionArray.reduce(
    (accumulator, object) => {
      accumulator[object.title.toLowerCase()] = object;
      return accumulator;
    },
    {}
  );

  return mappedArrayToObject;
};

// Check user session for persistence
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
