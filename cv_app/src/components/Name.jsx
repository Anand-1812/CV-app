import { useState } from "react";

function Name({ isActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="inputSection">
      <div className="inputBlock">
        <h2>Personal Details</h2>
        <label>
          First Name:
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="first name" />
        </label>
        <label>
          Last Name:
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
        </label>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        </label>
        <label>
          Phone No:
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="phone number" />
        </label>
      </div>
    </div>
  );
}

export default Name;

