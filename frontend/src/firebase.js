// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmHSuRVlngnoGXfYFQwP7BgahKaAvnT-0",
  authDomain: "chatterhub-ca4ec.firebaseapp.com",
  projectId: "chatterhub-ca4ec",
  storageBucket: "chatterhub-ca4ec.appspot.com",
  messagingSenderId: "699992670523",
  appId: "1:699992670523:web:d56e8bbd19be48dea2771e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);