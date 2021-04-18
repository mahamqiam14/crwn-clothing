import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPYRSvsH5hEG6OmCFFJVn_BLRfpsg0p18",
    authDomain: "crwn-db-b9447.firebaseapp.com",
    projectId: "crwn-db-b9447",
    storageBucket: "crwn-db-b9447.appspot.com",
    messagingSenderId: "971088320283",
    appId: "1:971088320283:web:e6ec23e156cbdbffc5a5be",
    measurementId: "G-8215R6Z5E6"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const  { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch (error) {
          console.log('error creating user', error.message);

        }
      }
      return userRef;
      
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( {prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;