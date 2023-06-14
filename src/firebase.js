// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW7pHgYNjsbv8wBRCci_9h1Tsz6yuiizA",
  authDomain: "fir-react-tutorial-7004e.firebaseapp.com",
  projectId: "fir-react-tutorial-7004e",
  storageBucket: "fir-react-tutorial-7004e.appspot.com",
  messagingSenderId: "274065805271",
  appId: "1:274065805271:web:a14e2d1df4782e1f8d0592",
  measurementId: "G-Q3Q5VQD8TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };