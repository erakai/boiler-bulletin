import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { MdExitToApp } from "react-icons/md";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxYKu18_oVVkMescl7RsM8-biyIQ0vAGg",
  authDomain: "boiler-bulletin.firebaseapp.com",
  projectId: "boiler-bulletin",
  storageBucket: "boiler-bulletin.appspot.com",
  messagingSenderId: "538958467794",
  appId: "1:538958467794:web:fcf99f25c0433e3a70d30b",
  measurementId: "G-D79QGWW249"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed In:
  })
  .catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;    
  });