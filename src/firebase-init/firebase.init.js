// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoqSlbxV5bVROzry39qoPIiol-SAqJo4g",
    authDomain: "job-site-a5736.firebaseapp.com",
    projectId: "job-site-a5736",
    storageBucket: "job-site-a5736.appspot.com",
    messagingSenderId: "205702681968",
    appId: "1:205702681968:web:7114a5e428af6d632cebb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;