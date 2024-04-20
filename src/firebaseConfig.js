// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEbmf1Ook4wbFzVCfcX3d9VoVf0zelwpo",
  authDomain: "axios-learn-23931.firebaseapp.com",
  projectId: "axios-learn-23931",
  storageBucket: "axios-learn-23931.appspot.com",
  messagingSenderId: "947882861329",
  appId: "1:947882861329:web:7ce07a37caf1c97918a2b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };