// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFJvLmBxYYJqoVQ2aghUmc-QjyGogMKKk",
  authDomain: "namaste-pointing-poker.firebaseapp.com",
  databaseURL:
    "https://namaste-pointing-poker-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "namaste-pointing-poker",
  storageBucket: "namaste-pointing-poker.firebasestorage.app",
  messagingSenderId: "48848655308",
  appId: "1:48848655308:web:12ad2bda150b78fd7f4369",
  measurementId: "G-8LZGERV66R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
