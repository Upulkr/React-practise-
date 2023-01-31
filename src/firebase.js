// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdI9TwHW0POlGLCphG-VhjVvBKNhylrIg",
  authDomain: "real-state-cb271.firebaseapp.com",
  projectId: "real-state-cb271",
  storageBucket: "real-state-cb271.appspot.com",
  messagingSenderId: "720332057253",
  appId: "1:720332057253:web:52705d35bdd708ddafbb4c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
