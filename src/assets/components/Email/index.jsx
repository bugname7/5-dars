import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setRes("togri manzil");
    } else {
      setRes("notogr manzil");
    }
  };

  return (
    <div>
      <h4>email kiritin:</h4>
      <input
        type="text"
        placeholder="email kiriting"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <button onClick={validate}>Tekshirish</button>
      <h4>{res}</h4>
    </div>
  );
}

export default Email;
