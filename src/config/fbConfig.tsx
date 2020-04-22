import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig: any = {
  apiKey: "AIzaSyB9Ftg3dbdsMrwxfpvBoNMgSu5-1HzB3-g",
  authDomain: "learn-it-31224.firebaseapp.com",
  databaseURL: "https://learn-it-31224.firebaseio.com",
  projectId: "learn-it-31224",
  storageBucket: "learn-it-31224.appspot.com",
  messagingSenderId: "607175907969",
  appId: "1:607175907969:web:a3e5571ba2be3787674b80",
  measurementId: "G-4MVKYV5C0M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
