import { useState } from "react";

function Education({ isActive }) {
  const [year, setYear] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Education Details</h2>
        <label>
          Year:
          <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2xxx-xx (format)" />
        </label>
        <label>
          University/College:
          <input value={universityName} onChange={(e) => setUniversityName(e.target.value)} placeholder="university name" />
        </label>
        <label>
          Degree:
          <input value={major} onChange={(e) => setMajor(e.target.value)} placeholder="degree/major" />
        </label>
        <label>
          Location:
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location" />
        </label>
      </div>
    </div>
  );
}

export default Education;

