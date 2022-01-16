// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVA94EPIrmlhOjOHnWYwZ_Hjxv3YcxtNg",
  authDomain: "uber-next-clone-fda69.firebaseapp.com",
  projectId: "uber-next-clone-fda69",
  storageBucket: "uber-next-clone-fda69.appspot.com",
  messagingSenderId: "943426664195",
  appId: "1:943426664195:web:15f44afa05e440975adb36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
