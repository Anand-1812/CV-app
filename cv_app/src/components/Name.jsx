function Name({ personalDetails, setPersonalDetails }) {

  function handleChange(e) {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Personal Details</h2>
        <label>
          Full Name:
          <input name="fullName" value={personalDetails.fullName} onChange={handleChange} placeholder="Name" />
        </label>
        <label>
          Email:
          <input name="email" value={personalDetails.email} onChange={handleChange} placeholder="email" />
        </label>
        <label>
          Phone No:
          <input name="phone" value={personalDetails.phone} onChange={handleChange} placeholder="phone number" />
        </label>
        <label>
          Location:
          <input name="location" value={personalDetails.location} onChange={handleChange} placeholder="location" />
        </label>
      </div>
    </div>
  );
}

export default Name;

