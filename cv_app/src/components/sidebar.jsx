import { useState } from "react";
import Buttons from "./buttons.jsx";
import Name from "./Name.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Sidebar() {
  const [activeSession, setActiveSession] = useState("personal");

  return (
    <section className="aside">
      <h1>CV Generator</h1>
      <Buttons setActiveSession={setActiveSession} />
      {activeSession === "personal" && <Name />}
      {activeSession === "education" && <Education />}
      {activeSession === "experience" && <Experience />}
      {activeSession === "skills" && <p>Skills section will be added later</p>}
    </section>
  );
}

export default Sidebar;
