import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

const App = () => (
  <div className="container">
    <Header title="Something" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
