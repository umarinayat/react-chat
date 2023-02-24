import { Link } from "react-router-dom";

const ChatHome = ({ user, updateUser }) => {
  const handleLogout = () => {
    updateUser(null);
  };
  return (
    <>
      <h1>{user.displayName}</h1>
      <button onClick={handleLogout}>
        <Link to="/">Logout</Link>
      </button>
    </>
  );
};

export default ChatHome;
