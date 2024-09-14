import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApOXtQ9oYmDPJm7NZx69mutLt03MaJYPk",
  authDomain: "marombabet-8a991.firebaseapp.com",
  projectId: "marombabet-8a991",
  storageBucket: "marombabet-8a991.appspot.com",
  messagingSenderId: "283427678485",
  appId: "1:283427678485:web:50f2f6d751f5a453d9611c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);