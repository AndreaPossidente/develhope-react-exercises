import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users/AndreaPossidente">Users: AndreaPossidente</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} interval={1000} />}
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}
