import Buttons from "./buttons";
import Name from "./Name.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Sidebar() {
  return (
    <>
      <section className="aside">
        <p>Fill the details below</p>
        <Buttons />
        <Name />
        <Education />
        <Experience />
      </section>
    </>
  );
}

export default Sidebar;
