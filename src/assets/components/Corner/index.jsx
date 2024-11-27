import React, { useState } from "react";
import "./index.css";

function Corner() {
  const [res, setRes] = useState("");
  const [value, setValue] = useState("");

  function handleSave() {
    const num = parseInt(value);

    if (isNaN(num)) {
      setRes("raqam kiriting");
    } else if (num === 3) {
      setRes("bu 3 burchak");
    } else if (num === 4) {
      setRes("bu 4 burchak");
    } else if (num === 5) {
      setRes("bu 5 burchak");
    } else {
      setRes("bunde burchak mavjud emas");
    }
  }

  return (
    <div className="wrap">
      <h1 className="corner">Shaklni aniqlash</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Son kiriting"
      />
      <button className="btn" onClick={handleSave}>Shaklni aniqlash</button>
      <h4 className="res">{res}</h4>
    </div>
  );
}

export default Corner;
