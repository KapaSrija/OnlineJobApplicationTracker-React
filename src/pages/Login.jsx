import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin");
    } else if (email && password) {
      navigate("/user");
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <p>Login to your JobTrack account</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;