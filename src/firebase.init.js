// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG50h8_v_6qvnWjUvWxRBhLQ3_qKxALy0",
  authDomain: "volunter-practice-simple.firebaseapp.com",
  projectId: "volunter-practice-simple",
  storageBucket: "volunter-practice-simple.appspot.com",
  messagingSenderId: "838977484179",
  appId: "1:838977484179:web:05afcb83a0ec696572a466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;