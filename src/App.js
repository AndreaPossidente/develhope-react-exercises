import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Gianni" age={25} />
        <Welcome />
      </div>
    );
  }
}
