import React, { Component } from "react";
import Counter from "./Counter";
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
        <Welcome name={<strong>Mario</strong>} age={67} />
        <hr />
        <Welcome name={<strong>John</strong>} age={42} />
        <hr />
        <Welcome />
        <hr />
        <Counter initialValue={0} increment={2} interval={2000} />
      </div>
    );
  }
}
