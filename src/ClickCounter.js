// import React, { Component } from "react";

// export default class ClickCounter extends Component {
//   state = { counter: 0 };

//   handleIncrement = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Click Count: {this.state.counter}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
