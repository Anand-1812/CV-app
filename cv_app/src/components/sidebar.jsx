import { useState } from "react";
import Buttons from "./buttons.jsx";
import Name from "./Name.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Sidebar() {
  const [activeSession, setActiveSession] = useState("personal");

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationDetails, setEducationDetails] = useState({
    year: "",
    university: "",
    degree: "",
    location: "",
  });

  const [experienceDetails, setExperienceDetails] = useState({
    year: "",
    company: "",
    title: "",
    location: "",
  });

  return (
    <section className="aside">
      <h1>CV Generator</h1>
      <Buttons setActiveSession={setActiveSession} />
      {activeSession === "personal" && <Name personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />}
      {activeSession === "education" && <Education personalDetails={educationDetails} setEducationDetails={setEducationDetails} />}
      {activeSession === "experience" && <Experience experienceDetails={experienceDetails} setExperienceDetails={setExperienceDetails} />}
      {activeSession === "skills" && <p>Skills section will be added later</p>}
    </section>
  );
}

export default Sidebar;
