import React from "react";

import "./App.css";
import Person from "./Person/Person";
class App extends React.Component {
  state = {
    data: ":(",
    click: false,
    name: "squidward"
  };
  clickHandler = () => {
    if (this.state.click === false) {
      this.setState({
        data: "^_^",
        click: true
      });
    }
    if (this.state.click === true) {
      this.setState({
        data: ":p",
        click: false
      });
    }
  };
  namehandler = events => {
    const name = events.target.value;
    if (!name) {
      this.setState({
        name: "Squidward"
      });
      return;
    }
    this.setState({
      name: name
    });
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

          <p>Click "Go" and see the magic!!{this.state.data}</p>
          <button onClick={this.clickHandler}>Go</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Person name={this.state.name} change={this.namehandler} />
        </header>
      </div>
    );
  }
}

export default App;
