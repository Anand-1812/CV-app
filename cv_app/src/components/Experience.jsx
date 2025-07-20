function Experience({ experienceDetails, setExperienceDetails }) {

  function handleChange(e) {
    setExperienceDetails({
      ...experienceDetails,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Experience</h2>
        <label>
          Year:
          <input name="year" value={experienceDetails.year} onChange={handleChange} placeholder="2xxx-xx (format)" />
        </label>
        <label>
          Company:
          <input name="company" value={experienceDetails.company} onChange={handleChange} placeholder="company name" />
        </label>
        <label>
          Job Title:
          <input name="title" value={experienceDetails.title} onChange={handleChange} placeholder="job title" />
        </label>
        <label>
          Location:
          <input name="location" value={experienceDetails.location} onChange={handleChange} placeholder="location" />
        </label>
      </div>
    </div>
  );
}

export default Experience;

