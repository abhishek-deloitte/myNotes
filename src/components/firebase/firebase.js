import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9GXbV-AMaE5jcCe9S3cwurm23Gn-q5F0",
  authDomain: "thenoteskeeperapp.firebaseapp.com",
  projectId: "thenoteskeeperapp",
  storageBucket: "thenoteskeeperapp.appspot.com",
  messagingSenderId: "872005196624",
  appId: "1:872005196624:web:26d1c488bb081cf7932a55",
  measurementId: "G-WR0FKX07KJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication service
const firestore = getFirestore(app); // Get the Firestore service

export { auth, firestore };