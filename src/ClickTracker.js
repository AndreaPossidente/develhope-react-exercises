import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = { clickedButton: null };

  handleButtonClick = (e) => {
    this.setState((prev) => ({ clickedButton: e.target.innerText }));
  };

  render() {
    return (
      <div>
        <h1>
          {!!this.state.clickedButton && this.state.clickedButton + " clicked!"}
        </h1>
        <button onClick={this.handleButtonClick}>Button 1</button>
        <button onClick={this.handleButtonClick}>Button 2</button>
        <button onClick={this.handleButtonClick}>Button 3</button>
      </div>
    );
  }
}
