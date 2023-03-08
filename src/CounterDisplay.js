import React, { Component } from "react";

export default class CounterDisplay extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#acc2b2",
          color: "#454d47",
          width: "200px",
          padding: "0px 5px",
          borderRadius: "6px",
          textAlign: "right",
        }}
      >
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}
