import React from "react";

import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 26
      },
      {
        name: "Stephanie",
        age: 28
      },
      {
        name: "Sony",
        age: 29
      }
    ]
  };
  render() {
    return (
      <div className="App-link">
        <header className="App-header">
          <p>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
              className="App-logo"
              alt="Loading"
            />
          </p>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button>Go</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Person />
        </header>
      </div>
    );
  }
}

export default App;
