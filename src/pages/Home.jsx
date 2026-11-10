
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2>JobTrack</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Track Your Job Applications Easily</h1>
        <p>
          Manage your job applications, track their status
          and take the next step in your career.
        </p>
        <Link to="/login" className="btn">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
