// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaoU0FbtluUwtwSZDFbskzvjZm_Yu4l-s",
  authDomain: "acco-f4de8.firebaseapp.com",
  projectId: "acco-f4de8",
  storageBucket: "acco-f4de8.appspot.com",
  messagingSenderId: "246478215033",
  appId: "1:246478215033:web:e5109fd93d800f8c16c1a8",
  measurementId: "G-WLYS7WF46L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore and functions
export { db, collection, addDoc, getDocs };
