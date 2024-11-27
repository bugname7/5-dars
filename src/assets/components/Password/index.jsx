import React, { useState } from "react";
import "./index.css";

function Password() {
  const [passwd, setPasswd] = useState("");
  const [passwd1, setPasswd1] = useState("");
  const [res, setRes] = useState("");
  const [sum, setSum] = useState("");

  function validate() {
    if (passwd.length < 4) {
      alert("parol kamida 4 raqam bolishi kere");
      return false;
    }
    if (passwd1.length < 4) {
      alert(" kamida 4 ta raqam  bo'lishi kerak");
      return false;
    }
    if (passwd !== passwd1) {
      setSum("togri kelmadi");
      return false;
    }
    return true;
  }

  function handleSave() {
    const isValid = validate();
    if (!isValid) {
      setSum("parol togri kelmadi");
      return;
    }
    setRes("parollar togri keldi");
  }

  return (
    <div>
      <label htmlFor="passwd">Parol</label>
      <br />
      <input
        type="password"
        id="passwd"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
        placeholder="parol"
      />
      <br />
      <label htmlFor="passwd1">Takrorlang</label>
      <br />
      <input
        type="password"
        id="passwd1"
        value={passwd1}
        onChange={(e) => setPasswd1(e.target.value)}
        placeholder="parol"
      />
      <br />
      <button className="btn" onClick={handleSave}>
        Tekshirish
      </button>
      <h4>{res}</h4>
      <h4>{sum}</h4>
    </div>
  );
}

export default Password;
