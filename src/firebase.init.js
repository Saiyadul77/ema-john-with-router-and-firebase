// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvHM1nManesQVgy2i-doCWmiJRQ3PDcOQ",
    authDomain: "ema-john-with-router-93caf.firebaseapp.com",
    projectId: "ema-john-with-router-93caf",
    storageBucket: "ema-john-with-router-93caf.appspot.com",
    messagingSenderId: "722784484808",
    appId: "1:722784484808:web:91ff2b9ebbc5868b8094fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

