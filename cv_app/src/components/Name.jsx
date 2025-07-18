import { useState } from "react";

function Name() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <>
      <div className="nameSection">
        <h2>Personal Section</h2>
        <div className="personalInfo">
          <label>
            First Name: <input value={firstName} onChange={handleFirstName} placeholder="first name" />
          </label>
          <label>
            Last Name: <input value={lastName} onChange={handleLastName} placeholder="last name" />
          </label>
        </div>
        <div className="personalInfo">
          <label>
            Email: <input value={email} onChange={handleEmail} placeholder="email" />
          </label>
        </div>
        <div className="personalInfo">
          <label>
            Phone No: <input value={phone} onChange={handlePhone} placeholder="phone number" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Name;
