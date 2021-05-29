import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counters />
  </StrictMode>,
  rootElement
);
