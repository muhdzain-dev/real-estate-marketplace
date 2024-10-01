// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ef219.firebaseapp.com",
  projectId: "mern-estate-ef219",
  storageBucket: "mern-estate-ef219.appspot.com",
  messagingSenderId: "474790895144",
  appId: "1:474790895144:web:da4ed00823123aa73c9f1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
