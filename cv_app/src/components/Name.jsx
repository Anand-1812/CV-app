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
          First Name:
          <input name="firstName" value={personalDetails.firstName} onChange={handleChange} placeholder="first name" />
        </label>
        <label>
          Last Name:
          <input name="lastName" value={personalDetails.lastName} onChange={handleChange} placeholder="last name" />
        </label>
        <label>
          Email:
          <input name="email" value={personalDetails.email} onChange={handleChange} placeholder="email" />
        </label>
        <label>
          Phone No:
          <input name="phone" value={personalDetails.phone} onChange={handleChange} placeholder="phone number" />
        </label>
      </div>
    </div>
  );
}

export default Name;

