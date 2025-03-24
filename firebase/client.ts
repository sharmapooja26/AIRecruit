import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCsWTFQkVI06_8mU_fxMVYO6ryz-1OT6CE",
  authDomain: "prepwise-eb3b1.firebaseapp.com",
  projectId: "prepwise-eb3b1",
  storageBucket: "prepwise-eb3b1.firebasestorage.app",
  messagingSenderId: "880706965087",
  appId: "1:880706965087:web:7d47f1092bef44098015ea",
  measurementId: "G-WJJLQHYGKE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
