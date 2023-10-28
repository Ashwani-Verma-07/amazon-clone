import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "challenge-6bd65.firebaseapp.com",
  databaseURL: "https://challenge-6bd65.firebase.io.com",
  projectId: "challenge-6bd65",
  storageBucket: "challenge-6bd65.appspot.com",
  messagingSenderId: "687533293362",
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
