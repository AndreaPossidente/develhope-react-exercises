import React from "react";
import Age from "./Age";

export default function Welcome({ name = "Anonymous", age }) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>
      {age && <Age age={age} />}
    </div>
  );
}
