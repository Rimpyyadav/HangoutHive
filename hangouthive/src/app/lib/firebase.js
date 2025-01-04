// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEVcC0qLwv9iBy2V5akJaRclc2w47P6LM",
  authDomain: "hangouthive-3ca0d.firebaseapp.com",
  projectId: "hangouthive-3ca0d",
  storageBucket: "hangouthive-3ca0d.firebasestorage.app",
  messagingSenderId: "793076747521",
  appId: "1:793076747521:web:59e6632b7cccfd8d4a9f00",
  measurementId: "G-FRZB5SKJ9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);