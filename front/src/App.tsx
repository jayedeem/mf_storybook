import React from "react";
import ReactDOM from "react-dom";
// import { Page, CTA } from "components";
import { CTA, Heading } from "./Components";
import "./index.css";

const App = () => (
  <div className="container">
    <Heading heading="LOLZ" />
    <CTA href="#" text="pokemon" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
