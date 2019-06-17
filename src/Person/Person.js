import React from "react";
import "../App.css";
import "../Person/Person.css";
const person = props => {
  return (
    <div>
      <input
        className="enter-style"
        type="text"
        placeholder="Enter  your name"
        onChange={props.change}
      />
      <h6 className="derive-pos">Working with React JS</h6>
      <div className="clock-pos">{new Date().toLocaleTimeString()}</div>
      <p className="App-logo1">Hi {props.name}</p>
    </div>
  );
};
export default person;
