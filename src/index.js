import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
