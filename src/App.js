import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return <div ClassName ="App">
  <Weather />
  <footer className="footer">
    This project was coded by Jessica Lamb and is {""}
  <a href = "https://github.com/jlamb2582/weather-project" target ="_blank" rel="noreferrer"> open-sourced on GitHub</a>
  </footer>
  </div>
}
