import React from "react";
import Person from "./Person/Person";
const persons = props =>
  props.data.map((entry, index) => {
    return (
      <div>
        <Person
          name={entry.type}
          key={entry.id}
          change={event => props.changed(event, entry.id)}
        />
      </div>
    );
  });
export default persons;
