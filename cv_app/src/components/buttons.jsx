function Buttons({ setActiveSession }) {
  return (
    <div className="detailsButton">
      <button onClick={() => setActiveSession("personal")}>Personal</button>
      <button onClick={() => setActiveSession("education")}>Education</button>
      <button onClick={() => setActiveSession("experience")}>Experience</button>
      <button onClick={() => setActiveSession("skills")}>Skills</button>
    </div>
  );
}

export default Buttons;

