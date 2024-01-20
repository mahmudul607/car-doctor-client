// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : import.meta.env.VITE_KEY_APIKEY,
  authDomain : import.meta.env.VITE_KEY_AUTHDOMAIN,
  projectId : import.meta.env.VITE_KEY_PROJECTID,
  storageBucket : import.meta.env.VITE_KEY_STORAGEBUCKET,
  messagingSenderId : import.meta.env.VITE_KEY_MESSAGINGSENDERID,
  appId : import.meta.env.VITE_KEY_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;