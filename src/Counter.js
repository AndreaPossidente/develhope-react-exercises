import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

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
    return <CounterDisplay counter={this.state.counter} />;
  }
}
