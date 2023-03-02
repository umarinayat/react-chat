import { Link } from "react-router-dom";

const ChatHome = ({ user, updateUser }) => {
  const handleLogout = () => {
    updateUser(null);
  };
  return (
    <>
      <h1>Welcome {user.displayName}!</h1>
      <button onClick={handleLogout}>LogOut</button>
      <div
        className="chat-interface"
        style={{
          backgroundColor: "black",
          height: "400px",
          padding: "1rem",
          position: "relative",
        }}
      >
        <div
          className="single-message"
          style={{
            backgroundColor: "grey",
            color: "black",
            width: "fit-content",
            padding: "0.1rem",
            height: "fit-content",
            borderRadius: "2%",
          }}
        >
          <bold>User Name</bold>
          <p>
            lorem sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas <br />
            jdbasdbnasjdbasdbasodasodbuoasdasuodsdasdasdsa
          </p>
        </div>
        <div
          className="single-message"
          style={{
            backgroundColor: "grey",
            color: "black",
            width: "fit-content",
            padding: "0.1rem",
            height: "fit-content",
            borderRadius: "2%",
            marginTop: "1rem",
          }}
        >
          <bold>User Name</bold>
          <p>
            lorem sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas <br />
            jdbasdbnasjdbasdbasodasodbuoasdasuodsdasdasdsa
          </p>
        </div>

        <form
          style={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <textarea></textarea>
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatHome;
