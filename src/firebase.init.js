// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhwcP7ybaYkRxcLA3MwS504Vo6pNCyTew",
  authDomain: "assignment-ten-2cf19.firebaseapp.com",
  projectId: "assignment-ten-2cf19",
  storageBucket: "assignment-ten-2cf19.appspot.com",
  messagingSenderId:"356439299353",
  appId:"1:356439299353:web:8dbd15760e42e02334e188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
