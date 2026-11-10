
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const defaultJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Hyderabad" },
  { id: 2, title: "Java Developer", company: "Infosys", location: "Bangalore" },
  { id: 3, title: "React Developer", company: "TCS", location: "Vijayawada" }
];

function AdminDashboard() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : defaultJobs;
  });

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function handleAddJob(e) {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      company,
      location
    };

    setJobs([...jobs, newJob]);
    setTitle("");
    setCompany("");
    setLocation("");
    setShowForm(false);

    alert("Job added successfully!");
  }

  function handleDeleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id));
    alert("Job deleted successfully!");
  }

  const applications = [
    { name: "Rahul", company: "Google", position: "Software Engineer", status: "Selected" },
    { name: "Priya", company: "Amazon", position: "Web Developer", status: "Interview" },
    { name: "Arun", company: "Microsoft", position: "Frontend Developer", status: "Pending" },
    { name: "Divya", company: "Infosys", position: "Java Developer", status: "Rejected" }
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="brand">🚀 JobTrack</h2>

        <p className="sidebar-heading">ADMIN PANEL</p>

        <a href="#dashboard" className="side-link active">📊 Dashboard</a>
        <a href="#jobs" className="side-link">💼 Job Listings</a>
        <a href="#applications" className="side-link">📋 Applications</a>
        <a href="#users" className="side-link">👥 Users</a>
        <a href="#analytics" className="side-link">📈 Analytics</a>
        <a href="#settings" className="side-link">⚙️ Settings</a>

        <Link to="/login" className="logout-link">↩ Logout</Link>
      </aside>

      <main className="admin-main" id="dashboard">
        <header className="admin-header">
          <div>
            <h1>Admin Dashboard 👑</h1>
            <p>Monitor your JobTrack platform activity.</p>
          </div>
          <div className="admin-profile">A</div>
        </header>

        <section className="stats-container">
          <div className="stat-card blue-card">
            <p>Total Customers</p>
            <h2>1,248</h2>
            <span>↑ 12% this month</span>
          </div>

          <div className="stat-card purple-card">
            <p>Total Applications</p>
            <h2>3,642</h2>
            <span>↑ 18% this month</span>
          </div>

          <div className="stat-card orange-card">
            <p>Active Jobs</p>
            <h2>{jobs.length}</h2>
            <span>Currently available</span>
          </div>

          <div className="stat-card green-card">
            <p>Successful Applications</p>
            <h2>842</h2>
            <span>Applications completed</span>
          </div>
        </section>

        <section className="admin-sections">
          <div className="applications-panel" id="applications">
            <div className="panel-heading">
              <h2>Recent Applications</h2>
              <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Add Job"}
              </button>
            </div>

            {showForm && (
              <form className="admin-form" onSubmit={handleAddJob}>
                <h3>Add New Job</h3>

                <input
                  type="text"
                  placeholder="Job Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />

                <button type="submit">Save Job</button>
              </form>
            )}

            <div className="table-wrapper">
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index}>
                      <td>{app.name}</td>
                      <td>{app.company}</td>
                      <td>{app.position}</td>
                      <td>
                        <span className={`status ${app.status.toLowerCase()}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="activity-panel">
            <h2>Recent Activity</h2>

            <div className="activity-item">
              <span className="activity-dot green-dot"></span>
              <div>
                <h4>New application</h4>
                <p>Rahul applied for Google</p>
                <small>5 min ago</small>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-dot blue-dot"></span>
              <div>
                <h4>Interview scheduled</h4>
                <p>Priya - Amazon</p>
                <small>20 min ago</small>
              </div>
            </div>

            <div className="activity-item">
              <span className="activity-dot red-dot"></span>
              <div>
                <h4>Application pending</h4>
                <p>Arun - Microsoft</p>
                <small>1 hour ago</small>
              </div>
            </div>
          </div>
        </section>

        <section className="manage-jobs" id="jobs">
          <h2>Manage Job Listings</h2>

          <div className="job-list">
            {jobs.map((job) => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteJob(job.id)}
                >
                  Delete Job
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;

