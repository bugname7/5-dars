import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { base } from "./base/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={base}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
