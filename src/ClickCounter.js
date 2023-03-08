import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ClickCounter extends Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Click Count: {this.state.counter}</h1>
        <Button variant="primary" onClick={this.handleIncrement}>
          Increment
        </Button>
      </div>
    );
  }
}
