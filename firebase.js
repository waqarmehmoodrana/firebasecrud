import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
 
  apiKey: "AIzaSyBynBKzSaVk7rYTtKzXWTzA_nm8VwMtO4A",
  authDomain: "fir-auth-crud-f826d.firebaseapp.com",
  projectId: "fir-auth-crud-f826d",
  storageBucket: "fir-auth-crud-f826d.appspot.com",
  messagingSenderId: "743839957423",
  appId: "1:743839957423:web:2046ed834250f8a82baf5a",
  measurementId: "G-L3FL04DM6L"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);