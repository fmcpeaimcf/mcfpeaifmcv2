
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACUOe0aisPsX4UE8kCKhlOEab0PmNOXFo",
  authDomain: "mcfpeaifmc.firebaseapp.com",
  databaseURL: "https://mcfpeaifmc-default-rtdb.firebaseio.com",
  projectId: "mcfpeaifmc",
  storageBucket: "mcfpeaifmc.appspot.com",
  messagingSenderId: "349371650104",
  appId: "1:349371650104:web:ad260e17e9cfd31ac456cd",
  measurementId: "G-LKC910C004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
