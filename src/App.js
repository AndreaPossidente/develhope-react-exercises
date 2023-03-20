import React from "react";
import CarDetails from "./CarDetails";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import Login from "./Login";

export default function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <Login />
      <GithubUser username="AndreaPossidente" />
      <CarDetails
        initialData={{ model: "Tesla", year: 2022, color: "black" }}
      />
    </div>
  );
}
