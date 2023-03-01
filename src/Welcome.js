import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name || "Anonymous"}!</p>
        {this.props?.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </>
    );
  }
}
