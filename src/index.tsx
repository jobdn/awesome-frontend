import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";

import "./shared/styles/index.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
