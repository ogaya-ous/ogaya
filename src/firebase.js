import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDENWIbvQodB8MbZXispbqxw4-FWl2vcVk",
  authDomain: "ogaya-8e672.firebaseapp.com",
  projectId: "ogaya-8e672",
  storageBucket: "ogaya-8e672.appspot.com",
  messagingSenderId: "552254909048",
  appId: "1:552254909048:web:1c4ced2226d2a840d31b8d"
  };

/*
import dotenv from "dotenv";
dotenv.config();


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
*/


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


