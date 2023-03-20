import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Andrea" />} />
      <Route
        path="/counter"
        element={<Counter initialValue={0} increment={1} interval={1000} />}
      />
      <Route path="/users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}
