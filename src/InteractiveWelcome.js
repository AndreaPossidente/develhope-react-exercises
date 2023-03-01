import React, { Component } from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends Component {
  state = { name: null };
  handleInputChange = (e) => {
    this.setState((prevState) => ({ name: e.target.value }));
  };
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
        />
        <Welcome name={this.state.name} />
      </div>
    );
  }
}
