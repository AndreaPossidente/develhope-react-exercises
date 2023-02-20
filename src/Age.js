import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return <p>Your age is {this.props.age || "unknown"}</p>;
  }
}
