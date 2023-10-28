import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAefYLUWgYQSwgaUmM-FwcFcJRvab089iw",
  authDomain: "world-36dd3.firebaseapp.com",
  databaseURL: "https://world-36dd3-default-rtdb.firebaseio.com",
  projectId: "world-36dd3",
  storageBucket: "world-36dd3.appspot.com",
  messagingSenderId: "560507505105",
  appId: "1:560507505105:web:a472f21ac9aa291bdef8f0",
  measurementId: "G-HKZ26G8W81"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
export { auth };

export { db };