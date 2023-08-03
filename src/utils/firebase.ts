// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNNNkTgeQIABmv0A6kkPIB3RZ8_nw5Lo",
  authDomain: "scissor-93cd2.firebaseapp.com",
  projectId: "scissor-93cd2",
  storageBucket: "scissor-93cd2.appspot.com",
  messagingSenderId: "104163390699",
  appId: "1:104163390699:web:39bd029feb2fdd8fe73aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,signInWithPopup, GoogleAuthProvider, provider }