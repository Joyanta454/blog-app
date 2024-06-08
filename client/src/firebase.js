// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog--app-1a83d.firebaseapp.com",
  projectId: "blog--app-1a83d",
  storageBucket: "blog--app-1a83d.appspot.com",
  messagingSenderId: "542015675444",
  appId: "1:542015675444:web:5c0d3cfe6b47a949127e61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);