// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_QlPDlyQNZ9vzjauwz7SH599yk_Z40ow",
  authDomain: "testreact-101.firebaseapp.com",
  projectId: "testreact-101",
  storageBucket: "testreact-101.appspot.com",
  messagingSenderId: "540263298606",
  appId: "1:540263298606:web:508d87c4d67baa197791bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);