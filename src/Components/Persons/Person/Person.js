import React from "react";
import "./Person.css";
const person = props => {
  return (
    <nav>
      <div>
        <input
          className="enter-style"
          type="text"
          placeholder="Enter  your skill"
          onChange={props.change}
        />
      </div>
      <p className="App-logo1">Wow! {props.name}</p>
    </nav>
  );
};
export default person;
