import React from "react";

// if the numbers prop is not present, i'll set a default value for it like this:
export default function Sum({ numbers = [0] }) {
  return <h1>{numbers.reduce((a, b) => a + b)}</h1>;
}
