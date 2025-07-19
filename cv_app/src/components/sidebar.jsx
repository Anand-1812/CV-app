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
        <Name isActive={true} />
        <Education isActive={false} />
        <Experience isActive={false} />
      </section>
    </>
  );
}

export default Sidebar;
