import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_TOKEN,
  authDomain: 'phasmophobia-cheatsheet.firebaseapp.com',
  projectId: 'phasmophobia-cheatsheet',
  storageBucket: 'phasmophobia-cheatsheet.appspot.com',
  messagingSenderId: '223315520460',
  appId: '1:223315520460:web:831e3d1bcdea96381ccb69',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firebase, firestore };
