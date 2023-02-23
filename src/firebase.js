import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXeaBvDFNZah3Rg_CDY5qBuVXVLiRV_WE",
  authDomain: "react-chat-79b21.firebaseapp.com",
  projectId: "react-chat-79b21",
  storageBucket: "react-chat-79b21.appspot.com",
  messagingSenderId: "968526672879",
  appId: "1:968526672879:web:5eedb7fa31a46a3a7dbc1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

const auth = getAuth();

// Handle Google Login

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

export { app, auth, loginWithGoogle };
