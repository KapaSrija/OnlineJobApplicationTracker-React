

import { Link } from "react-router-dom";
import { useState } from "react";

function UserDashboard() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Hyderabad"
    },
    {
      id: 2,
      title: "Java Developer",
      company: "Infosys",
      location: "Bangalore"
    },
    {
      id: 3,
      title: "React Developer",
      company: "TCS",
      location: "Vijayawada"
    }
  ];

  function handleApply(job) {
    setAppliedJobs([...appliedJobs, job.id]);
    alert("Successfully applied for " + job.title);
  }

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>JobTrack</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard!</h1>
        <p>Find jobs and track your applications.</p>

        <h2>Available Jobs</h2>

        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>

              <button
                onClick={() => handleApply(job)}
                disabled={appliedJobs.includes(job.id)}
              >
                {appliedJobs.includes(job.id)
                  ? "Applied"
                  : "Apply Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
