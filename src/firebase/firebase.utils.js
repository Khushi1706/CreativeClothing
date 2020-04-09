import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4t3dlzkNyuPOdAbnUSsXX29OabiZBYu0",
    authDomain: "clothing-db-19776.firebaseapp.com",
    databaseURL: "https://clothing-db-19776.firebaseio.com",
    projectId: "clothing-db-19776",
    storageBucket: "clothing-db-19776.appspot.com",
    messagingSenderId: "349882636450",
    appId: "1:349882636450:web:85f1e6896820fba4315ffb",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;