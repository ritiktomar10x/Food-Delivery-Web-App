// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "food-delivery-743a4.firebaseapp.com",
  projectId: "food-delivery-743a4",
  storageBucket: "food-delivery-743a4.firebasestorage.app",
  messagingSenderId: import.meta.env.SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}