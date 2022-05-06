// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgb46dVrmnBnNI-ckjtFEXjxcmHhIl99U",
    authDomain: "assignment-11-mobile-warehouse.firebaseapp.com",
    projectId: "assignment-11-mobile-warehouse",
    storageBucket: "assignment-11-mobile-warehouse.appspot.com",
    messagingSenderId: "6111876743",
    appId: "1:6111876743:web:003ec95dfd4936d2190a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;