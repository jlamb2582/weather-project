import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./App.css";

function Weather() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
