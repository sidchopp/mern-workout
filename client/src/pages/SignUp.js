import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, isLoading, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
      <p>
        <span style={{ paddingRight: "10px" }}>Already registered?</span>
        <Link
          to="/login"
          style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
        >
          Log In
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
