import _default from "eslint-plugin-react-refresh";
import { useState } from "react";

function Education() {
  const [year, setYear] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handleUniversityName(e) {
    setUniversityName(e.target.value);
  }

  function handleDegree(e) {
    setMajor(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <div className="education">
        <h2>Education Detials</h2>
        <div className="year">
          <label>
            Year: <input value={year} onChange={handleYear} placeholder="2xxx-xx (format)" />
          </label>
        </div>

        <div className="university">
          <label>
            Unversity/College: <input value={universityName} onChange={handleUniversityName} placeholder="university name" />
          </label>
        </div>

        <div className="degree">
          <label>
            Degree: <input value={major} onChange={handleDegree} placeholder="degree/major" />
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

export default Education;
