import React from "react";
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
    {props.show}
  </header>
);

export default cockpit;
