import logo from "./icon.png";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "center", height: "100vh" }}
    >
      <header className="App-header"></header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            src={logo}
            style={{ width: "150px", borderRadius: "8px" }}
            alt="logo"
          />
          <div>
            <p style={{ color: "white", fontSize: "40px" }}>Miwago</p>
          </div>
        </div>
        <p style={{ color: "white", fontSize: "20px" }}>
          To delete your data from your Miwago account, send an email to :{" "}
          <a
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "white",
            }}
            href="contactmiwago@gmail.com"
          >
            contactmiwago@gmail.com
          </a>{" "}
          containing your username.
        </p>
        <p style={{ color: "white", fontSize: "20px" }}>
          All your account data will be permanently deleted, namely:
        </p>
        <ul>
          <li style={{ color: "white", fontSize: "20px" }}>
            Your kanji scores
          </li>
          <li style={{ color: "white", fontSize: "20px" }}>Your Username</li>
          <li style={{ color: "white", fontSize: "20px" }}>
            Your revisions and posts to watch later
          </li>
          <li style={{ color: "white", fontSize: "20px" }}>Your JLPT Level</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
