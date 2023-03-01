import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initialValue };

    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + this.props.increment,
      }));
    }, this.props.interval);
  }
  render() {
    return <h1>{this.state.counter}</h1>;
  }
}
