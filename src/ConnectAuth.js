// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpa3ecp1GFyByiZD459rGgJx2VnkQwqVk",
  authDomain: "react-firebase-auth-pl.firebaseapp.com",
  projectId: "react-firebase-auth-pl",
  storageBucket: "react-firebase-auth-pl.appspot.com",
  messagingSenderId: "332777624941",
  appId: "1:332777624941:web:83aad28508cc14eec63664"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);