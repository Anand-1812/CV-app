import { useState } from "react";
import Buttons from "./buttons.jsx";
import Name from "./Name.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Sidebar({
  personalDetails,
  setPersonalDetails,
  educationDetails,
  setEducationDetails,
  experienceDetails,
  setExperienceDetails,
}) {
  const [activeSession, setActiveSession] = useState("personal");

  return (
    <section className="aside">
      <h1>CV Generator</h1>
      <Buttons setActiveSession={setActiveSession} />
      {activeSession === "personal" && (
        <Name
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      )}
      {activeSession === "education" && (
        <Education
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      )}
      {activeSession === "experience" && (
        <Experience
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      )}
      {activeSession === "skills" && <p>Skills section will be added later</p>}
    </section>
  );
}

export default Sidebar;

