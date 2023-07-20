// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6BNkAuV0_spW3wZfTA3Yr4TsuGIcZufI",
  authDomain: "practice-f2c1b.firebaseapp.com",
  projectId: "practice-f2c1b",
  storageBucket: "practice-f2c1b.appspot.com",
  messagingSenderId: "531562968726",
  appId: "1:531562968726:web:36baab99b9909c3371f4b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);