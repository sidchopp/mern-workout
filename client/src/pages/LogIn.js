import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogIn } from "../hooks";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, isLoading, error } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button disabled={isLoading}>Log In</button>
      {error && <div className="error">{error}</div>}
      <p>
        <span style={{ paddingRight: "10px" }}>Not a member?</span>
        <Link to="/signup" style={{ color: "white" }}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LogIn;
