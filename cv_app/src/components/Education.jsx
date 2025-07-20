function Education({ educationDetails, setEducationDetails }) {

  function handleChange(e) {
    setEducationDetails({
      ...educationDetails,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Education Details</h2>
        <label>
          Year:
          <input name="year" value={educationDetails.year} onChange={handleChange} placeholder="2xxx-xx (format)" />
        </label>
        <label>
          University/College:
          <input name="university" value={educationDetails.universit} onChange={handleChange} placeholder="university name" />
        </label>
        <label>
          Degree:
          <input name="degree" value={educationDetails.degree} onChange={handleChange} placeholder="degree/major" />
        </label>
        <label>
          Location:
          <input name="location" value={educationDetails.location} onChange={handleChange} placeholder="location" />
        </label>
      </div>
    </div>
  );
}

export default Education;

