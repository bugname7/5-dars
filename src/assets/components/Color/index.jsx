import React, { useState } from "react";

function Color() {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <h4>ranglar:</h4>

      <label>
        <input
          type="radio"
          name="color"
          value="black"
          onChange={handleColorChange}
        />
        Qora
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="color"
          value="red"
          onChange={handleColorChange}
        />
        Qizil
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="color"
          value="yellow"
          onChange={handleColorChange}
        />
        Sariq
      </label>
      <br />
      <div
        style={{
          width: "200px",
          height: "100px",
          marginTop: "20px",
          backgroundColor: selectedColor || "transparent",
          border: "1px solid #000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: selectedColor === "" ? "" : "" }}>
          {selectedColor ? ` ${selectedColor}` : ""}
        </h4>
      </div>
    </div>
  );
}

export default Color;
