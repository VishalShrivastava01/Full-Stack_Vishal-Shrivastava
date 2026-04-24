import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log("Error fetching jobs:", err));
  }, []);

  // Function to handle the apply action
  const handleApply = (jobTitle) => {
    alert(`Application for ${jobTitle} submitted successfully!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>
      <hr />

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job._id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Description:</strong> {job.description}</p>
            
            {/* The Apply Button */}
            <button 
              onClick={() => handleApply(job.title)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Apply Now
            </button>
          </div>
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
}

export default Home;