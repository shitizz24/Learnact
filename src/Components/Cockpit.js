import React from "react";
import SkillsAdder from "./SkillsAddder";
const cockpit = props => (
  <header className="App-header">
    <p>
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
        className="App-logo"
        alt="Loading"
      />
    </p>
    <button onClick={props.toggle}>Toggle</button>
    <p>Click "Go" and see the magic!!{props.smiley}</p>
    <button onClick={props.clicked}>Go</button>
    <div className="skills">
      <code>Your skills :</code>
      {props.show}
    </div>
    <SkillsAdder change={props.skillinput} addskills={props.clicked2} />
  </header>
);

export default cockpit;
