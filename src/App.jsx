import { Route, Routes } from "react-router-dom";

import ChatHome from "./ChatHome";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<ChatHome />} />
    </Routes>
  );
}

export default App;
