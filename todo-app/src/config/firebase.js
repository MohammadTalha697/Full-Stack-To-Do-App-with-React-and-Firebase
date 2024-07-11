// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMc-0NWRPYf4enqvvLPEPufi_BWjoRdZw",
    authDomain: "mohammad-talha-todo-app.firebaseapp.com",
    projectId: "mohammad-talha-todo-app",
    storageBucket: "mohammad-talha-todo-app.appspot.com",
    messagingSenderId: "742964207631",
    appId: "1:742964207631:web:0bb981a0a90242811e837a",
    measurementId: "G-212B0J4WLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);