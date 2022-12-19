// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import Providers from 'next-auth/providers'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXU0ZaSpdT_f5wewXyiL-6q-cuA1QYj7w",
  authDomain: "clone-e651b.firebaseapp.com",
  projectId: "clone-e651b",
  storageBucket: "clone-e651b.appspot.com",
  messagingSenderId: "124317561205",
  appId: "1:124317561205:web:22182783cdde85209ba33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
