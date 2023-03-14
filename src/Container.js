import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="bg-white border-2 border-red-600">
        {this.props.children}
      </div>
    );
  }
}
