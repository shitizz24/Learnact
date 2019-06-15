import React from "react";

import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  state = {
    data: "boi",
    click: false
  };
  clickHandler = () => {
    if (this.state.click === false) {
      this.setState({
        data: "bingo",
        click: true
      });
    }
    if (this.state.click === true) {
      this.setState({
        data: "boi",
        click: false
      });
    }
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
            Edit <code>{this.state.data}</code> and save to reload.
          </p>
          <button onClick={this.clickHandler}>Go</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Person name="Max" />
        </header>
      </div>
    );
  }
}

export default App;
