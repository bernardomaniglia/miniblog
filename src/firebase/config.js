import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqYCasGEyZ9YhXrf157zmit1rabGnct6I",
  authDomain: "miniblog-b4d79.firebaseapp.com",
  projectId: "miniblog-b4d79",
  storageBucket: "miniblog-b4d79.appspot.com",
  messagingSenderId: "453883961369",
  appId: "1:453883961369:web:747096ddf10e5e698d8a88",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
