import { useState } from "react";

function Experience() {
  const [year, setYear] = useState("");
  const [company, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handleCompanyName(e) {
    setCompanyName(e.target.value);
  }

  function handleJobName(e) {
    setJobTitle(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <div className="year">
          <label>
            Year: <input value={year} onChange={handleYear} placeholder="2xxx-xx (format)" />
          </label>
        </div>

        <div className="university">
          <label>
            Company: <input value={company} onChange={handleCompanyName} placeholder="company name" />
          </label>
        </div>

        <div className="degree">
          <label>
            Job Title: <input value={jobTitle} onChange={handleJobName} placeholder="degree/major" />
          </label>
        </div>

        <div className="location">
          <label>
            Location: <input value={location} onChange={handleLocation} placeholder="location" />
          </label>
        </div>

      </div>
    </>
  );
}

export default Experience;
