import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXeaBvDFNZah3Rg_CDY5qBuVXVLiRV_WE",
  authDomain: "react-chat-79b21.firebaseapp.com",
  projectId: "react-chat-79b21",
  storageBucket: "react-chat-79b21.appspot.com",
  messagingSenderId: "968526672879",
  appId: "1:968526672879:web:5eedb7fa31a46a3a7dbc1a",
  databaseURL: "https://react-chat-79b21-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };
