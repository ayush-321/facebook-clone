// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUbdxITPaeKMgyPwMxBEGBaJgD4BgjVyE",
  authDomain: "facebook-clone-c918f.firebaseapp.com",
  projectId: "facebook-clone-c918f",
  storageBucket: "facebook-clone-c918f.appspot.com",
  messagingSenderId: "277612427860",
  appId: "1:277612427860:web:be89dce4d293b89fdc0bc1",
  measurementId: "G-T20EP7WPKG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
