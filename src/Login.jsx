import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

import ChatHome from "./ChatHome";
import { app, auth } from "./firebase";

const Login = () => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    app;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const loginLogic = (
    <div>
      <h1 style={{ textAlign: "center" }}>Best React Chat App</h1>
      <div className="signInDiv">
        <button onClick={loginWithGoogle}>Sign In</button>
      </div>
    </div>
  );
  return (
    <>{user ? <ChatHome user={user} updateUser={updateUser} /> : loginLogic}</>
  );
};

export default Login;
