import React, { Component } from "react";
import Age from "./Age";

// export default class Welcome extends Component {
//   render() {
//     return (
//       <div className="welcome">
//         <p>Welcome, {this.props?.name || "Anonymous"}!</p>
//         {this.props?.age && <Age age={this.props.age} />}
//       </div>
//     );
//   }
// }

export default function Welcome({ name = "Anonymous", age }) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>
      {age && <Age age={age} />}
    </div>
  );
}
