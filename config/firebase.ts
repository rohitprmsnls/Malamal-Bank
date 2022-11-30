import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmNo6HbR9PptERS-t9UAZCdJUP1kpzoTE",
  authDomain: "malamal-bank.firebaseapp.com",
  projectId: "malamal-bank",
  storageBucket: "malamal-bank.appspot.com",
  messagingSenderId: "849110286392",
  appId: "1:849110286392:web:2858c0b1219c2ffa6a26cd",
  measurementId: "G-4PTHDE99WT",
  databaseURL: "https://malamal-bank-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// const db = getFirestore(app);
export const db = getDatabase(app);