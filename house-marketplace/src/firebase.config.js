// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdA3vRGCqvcQvLubWbur0VXnUNGH2vJMw",
  authDomain: "house-marketplace-app-84ae2.firebaseapp.com",
  projectId: "house-marketplace-app-84ae2",
  storageBucket: "house-marketplace-app-84ae2.appspot.com",
  messagingSenderId: "126968864043",
  appId: "1:126968864043:web:47dc9ea3d70ec81dd6796e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db  = getFirestore()

