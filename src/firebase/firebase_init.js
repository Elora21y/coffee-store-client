// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDumkpkSMX-Gr0mrUHdehmIfIvf5SbcXzQ",
  authDomain: "simple-react-firebase-89aa7.firebaseapp.com",
  projectId: "simple-react-firebase-89aa7",
  storageBucket: "simple-react-firebase-89aa7.firebasestorage.app",
  messagingSenderId: "507934259409",
  appId: "1:507934259409:web:58fb9a83f0278e02d22df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);