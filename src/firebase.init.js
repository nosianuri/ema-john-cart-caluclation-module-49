// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbT7UP2ZYA8AtsngTHURlaHXuqi_esH0",
  authDomain: "ema-john-simple-ebbd2.firebaseapp.com",
  projectId: "ema-john-simple-ebbd2",
  storageBucket: "ema-john-simple-ebbd2.appspot.com",
  messagingSenderId: "575447113760",
  appId: "1:575447113760:web:68373ed7aa1ab078c19c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;