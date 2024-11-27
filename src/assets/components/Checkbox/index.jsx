import React, { useState } from "react";

function Checkbox() {
  const [fruit, setFruit] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFruit([...fruit, value]);
    } else {
      setFruit(fruit.filter((fruit) => fruit !== value));
    }
  };

  return (
    <div>
      <h4>mevalar:</h4>
      <label>
        <input type="checkbox" value="olma" onChange={handleCheckboxChange} />
        olma
      </label>
      <br />
      <label>
        <input type="checkbox" value="anor" onChange={handleCheckboxChange} />
        anor
      </label>
      <br />
      <label>
        <input type="checkbox" value="behi" onChange={handleCheckboxChange} />
        behi
      </label>
      <br />

      <p>{fruit.length > 0 ? fruit.join(", ") : "0"}</p>
    </div>
  );
}

export default Checkbox;
