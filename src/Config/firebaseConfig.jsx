// src/Config/Config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBLiTyVoE3_dsjdsqUHEoRARnkZ09_lMEo",
  authDomain: "photography-portfolio-8f092.firebaseapp.com",
  projectId: "photography-portfolio-8f092",
  storageBucket: "photography-portfolio-8f092.appspot.com",
  messagingSenderId: "942073512959",
  appId: "1:942073512959:web:94b87c5193a7d6a93a1dca",
  measurementId: "G-6BHE1L4H07" // Optional, if you have it
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);


export default firebaseApp; // Optionally export the initialized Firebase app instance
