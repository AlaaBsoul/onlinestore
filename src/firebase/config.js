import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbBGbTBr5LSkeqYeMe22bABd6D_1RjB0c",
  authDomain: "online-store-14a35.firebaseapp.com",
  projectId: "online-store-14a35",
  storageBucket: "online-store-14a35.appspot.com",
  messagingSenderId: "25163088932",
  appId: "1:25163088932:web:b5ea9f934be9b90f2004b1",
  measurementId: "G-29L5LVE0H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, storage };
