import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="bg-white border-2 border-red-600">
        <h1 className="text-2xl font-bold">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
