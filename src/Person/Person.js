import React from "react";
import "../App.css";
const person = props => {
  return (
    <div>
      <div>It's {new Date().toLocaleTimeString()}</div>
      <p className="App-logo1">Hi {props.name}</p>
    </div>
  );
};
export default person;
