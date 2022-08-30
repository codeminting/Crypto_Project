// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBruQ6uCQzLzjNXeL_bE-ya1tj745uZg70",
  authDomain: "crypto-project-16df6.firebaseapp.com",
  projectId: "crypto-project-16df6",
  storageBucket: "crypto-project-16df6.appspot.com",
  messagingSenderId: "302649179064",
  appId: "1:302649179064:web:e05eb9d1d2f05f61fbed4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, storage };
