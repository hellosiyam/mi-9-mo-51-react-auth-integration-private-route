// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCkEGEsA2v80GIcGSr5QAOSsJH9TsMqXR0",
  authDomain: "mo-51-react-auth-integration.firebaseapp.com",
  projectId: "mo-51-react-auth-integration",
  storageBucket: "mo-51-react-auth-integration.firebasestorage.app",
  messagingSenderId: "359276767889",
  appId: "1:359276767889:web:ac63fa70ee7310a4ff2d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth