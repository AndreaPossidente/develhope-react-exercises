import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <p>Welcome, {this.props.name || "Anonymous"}!</p>
        {/* lo avevo gia fatto nell'esercizio precendente
            il componente Age viene mostrato solo se il prop age esiste
            ho utilizzato l'optional chaining ?.age */}
        {this.props?.age > 18 && <Age age={this.props.age} />}
      </>
    );
  }
}
