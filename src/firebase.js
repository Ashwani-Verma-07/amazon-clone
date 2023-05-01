import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBxRBnazqC8NxIa2XAJL4WALENqahmYLo",
  authDomain: "challenge-6bd65.firebaseapp.com",
  databaseURL: "https://challenge-6bd65.firebase.io.com",
  projectId: "challenge-6bd65",
  storageBucket: "challenge-6bd65.appspot.com",
  messagingSenderId: "687533293362",
  appId: "1:687533293362:web:2b06c6edf0f1e1b461612b",
  measurementId: "G-M8JM8Y91MR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
