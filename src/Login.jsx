import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatHome from "./ChatHome";

import { app, auth } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    app;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Best React Chat App</h1>
      <div className="signInDiv">
        <button onClick={loginWithGoogle}>Sign In</button>
      </div>
      {user && <ChatHome user={user} />}
    </>
  );
};

export default Login;
