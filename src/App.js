import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <Welcome name={<strong>Gianni</strong>} age={25} />
        <hr />
        <Welcome name={<strong>Pino</strong>} age={16} />
        <hr />
        <Welcome />
        <hr />
      </div>
    );
  }
}
