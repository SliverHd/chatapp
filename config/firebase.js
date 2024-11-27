import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD30-CfHkeAcsKCPtTqthhHGR4b2cpw-Go",
  authDomain: "chatapp-c20a4.firebaseapp.com",
  projectId: "chatapp-c20a4",
  storageBucket: "chatapp-c20a4.firebasestorage.app",
  messagingSenderId: "543492817323",
  appId: "1:543492817323:web:b47cbe1fe2b0b5ec3ad2ee"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
