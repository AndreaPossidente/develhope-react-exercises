import React from "react";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import Login from "./Login";

export default function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <Login />
      <GithubUser username="AndreaPossidente" />
    </div>
  );
}
