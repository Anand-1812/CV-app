import { useState } from "react";

function Experience({ isActive }) {
  const [year, setYear] = useState("");
  const [company, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Experience</h2>
        <label>
          Year:
          <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2xxx-xx (format)" />
        </label>
        <label>
          Company:
          <input value={company} onChange={(e) => setCompanyName(e.target.value)} placeholder="company name" />
        </label>
        <label>
          Job Title:
          <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="job title" />
        </label>
        <label>
          Location:
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location" />
        </label>
      </div>
    </div>
  );
}

export default Experience;

