// import React, { Component } from "react";
// import CounterDisplay from "./CounterDisplay";

// export default class Counter extends Component {
//   state = { counter: this.props.initialValue };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((prevState) => ({
//         counter: prevState.counter + this.props.increment,
//       }));
//     }, this.props.interval);
//   }
//   render() {
//     return <CounterDisplay counter={this.state.counter} />;
//   }
// }

import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({
  initialValue = 0,
  increment = 1,
  interval = 1000,
}) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + increment);
    }, interval);
    return () => {
      return clearInterval(intervalId);
    };
  }, [increment, interval]);

  return <CounterDisplay counter={count} />;
}
