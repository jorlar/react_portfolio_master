// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsG9gSr2ik_w0quvBAYG-jVotCNMvlpRk",
  authDomain: "portfolio-710bd.firebaseapp.com",
  projectId: "portfolio-710bd",
  storageBucket: "portfolio-710bd.appspot.com",
  messagingSenderId: "700892952370",
  appId: "1:700892952370:web:a7c4a9184578f363f3492b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// SignIn with Google
export const signInWithGoogle = () => signInWithPopup(auth, provider);