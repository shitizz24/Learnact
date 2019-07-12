import React from "react";
import "./Person.css";
const person = props => {
  return (
    <nav>
      <p className="App-logo1"> {props.name}</p>
    </nav>
  );
};
export default person;
