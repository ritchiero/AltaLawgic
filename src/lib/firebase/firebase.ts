import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmPyUjb11tifivZWXakx_dnNhA9OghZzw",
  authDomain: "alta-lawgic-2025.firebaseapp.com",
  projectId: "alta-lawgic-2025",
  storageBucket: "alta-lawgic-2025.appspot.com",
  messagingSenderId: "866983001332",
  appId: "1:866983001332:web:8a688ad347de2bf15c72a1"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
