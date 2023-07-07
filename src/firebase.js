import { initializeApp } from "firebase/app";
import { collection, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHJE-2pmGXjDUMi30Ct-v2zLc6RfllMzw",
  authDomain: "ibm-cse-69648.firebaseapp.com",
  projectId: "ibm-cse-69648",
  storageBucket: "ibm-cse-69648.appspot.com",
  messagingSenderId: "270302708205",
  appId: "1:270302708205:web:d70cb76797e80c221527e4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
