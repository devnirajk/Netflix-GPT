// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZq9dSW3ZvxwTa9vdKuflSxVjZcfnIVz0",
  authDomain: "netflix-gpt-c9502.firebaseapp.com",
  projectId: "netflix-gpt-c9502",
  storageBucket: "netflix-gpt-c9502.appspot.com",
  messagingSenderId: "160817683762",
  appId: "1:160817683762:web:3241ca07493536fda30b2b",
  measurementId: "G-WFNHY8VZHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
