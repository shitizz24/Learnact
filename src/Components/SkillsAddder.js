import React from "react";
const skillsadder = props => {
  return (
    <div>
      <input
        className="enter-style"
        type="text"
        placeholder="Enter  your skill"
        onChange={props.change}
      />
      <button onClick={event => props.addskills(event)}> Add Skills</button>
    </div>
  );
};

export default skillsadder;
