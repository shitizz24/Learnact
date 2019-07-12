import React from "react";
import Person from "./Person/Person";
const persons = props =>
  props.data.map((entry, index) => {
    return (
      <Person
        name={entry.type}
        key={entry.id}
        change={event => props.changed(event, entry.id)}
      />
    );
  });
export default persons;
