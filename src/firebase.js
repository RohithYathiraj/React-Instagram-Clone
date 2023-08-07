// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGCPYgtMwcOsZQ8vx-GODpj4jhByw63lI",
  authDomain: "instagram-clone-973cc.firebaseapp.com",
  projectId: "instagram-clone-973cc",
  storageBucket: "instagram-clone-973cc.appspot.com",
  messagingSenderId: "203108291876",
  appId: "1:203108291876:web:f6bfed44950b71fc338fb1",
  measurementId: "G-T7DBMV0CBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
