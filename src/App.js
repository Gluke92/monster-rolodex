import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Banshee",
          id: "asc1"
        },
        {
          name: "Dracula",
          id: "asc2"
        },
        {
          name: "Zombie",
          id: "asc3"
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
