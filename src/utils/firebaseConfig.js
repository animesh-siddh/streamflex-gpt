// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_9l6GRmu7XEYlL3YC0IrJ5u5-5bRl2AU",
  authDomain: "streamflex-ff670.firebaseapp.com",
  projectId: "streamflex-ff670",
  storageBucket: "streamflex-ff670.firebasestorage.app",
  messagingSenderId: "850757395348",
  appId: "1:850757395348:web:81689530a77cb170072581",
  measurementId: "G-Z90LQVLZQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()