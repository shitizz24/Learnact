import React from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit";
class App extends React.Component {
  state = {
    data: ":(",
    click: false,
    name: "squidward",
    toggle: true,
    dataset: [
      { id: "1", skill: "C++", type: "Programming" },
      { id: "2", skill: "NodeJS", type: "Web Development" },
      { id: "3", skill: "Deep Learning", type: "ML" }
    ],
    new_skill: " "
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
    console.log("Clicked");
  };
  namehandler = (event, key) => {
    const name = event.target.value;
    const toupdate = this.state.dataset.findIndex(s => {
      return s.id === key;
    });
    const entry = {
      ...this.state.dataset[toupdate]
    };
    entry.type = name;
    const skills = [...this.state.dataset];
    skills[toupdate] = entry;
    this.setState({
      dataset: skills
    });
  };

  togglehandler = () => {
    const inverter = this.state.toggle;
    this.setState({
      toggle: !inverter
    });
  };

  inputskill = event => {
    const entry = event.target.value;
    this.setState({
      new_skill: entry
    });
  };
  skillsadder = () => {
    const trial = this.state.new_skill;
    console.log({ trial });
    const array = [...this.state.dataset];
    const newentry = {
      id: this.state.dataset.length + 1,
      skill: "Arbitary",
      type: this.state.new_skill
    };
    array.push(newentry);
    console.log({ array });

    this.setState({
      dataset: array
    });
  };

  render() {
    let toggled = null;
    if (this.state.toggle === true) {
      toggled = <Persons data={this.state.dataset} change={this.namehandler} />;
    }
    return (
      <div className="App-link">
        <Cockpit
          toggle={this.togglehandler}
          smiley={this.state.data}
          clicked={this.clickHandler}
          show={toggled}
          clicked2={this.skillsadder}
          skillinput={this.inputskill}
        />
      </div>
    );
  }
}

export default App;
