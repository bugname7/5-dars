import React from "react";
import Corner from "./assets/components/Corner";
import Color from "./assets/components/Color";
import Password from "./assets/components/Password";
import Checkbox from "./assets/components/Checkbox";
import Email from "./assets/components/Email";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <div className="wrap">
      <Corner />
      <Password />
      <Checkbox />
      <Color />
      <Email/>
      <Todo/>
    </div>
  );
}

export default App;
