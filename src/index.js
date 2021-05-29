import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import { Button } from "react-bootstrap";

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
