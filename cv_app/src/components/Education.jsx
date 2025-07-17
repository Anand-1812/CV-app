import { useState } from "react";

function Education() {
  const [year, setYear] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <div className="education">
        <div className="year">

          <label>
            First Name: <input value={firstName} onChange={handleFirstName} placeholder="first name" />
          </label>
        </div>
      </div>
    </>
  );
}
