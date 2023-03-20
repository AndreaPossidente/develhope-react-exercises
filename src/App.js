import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";
import GithubUserList from "./GithubUserList";

export default function App() {
  return (
    <div>
      <Link to="/">Welcome</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Andrea" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} increment={1} interval={1000} />}
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h2>Add a user and select it</h2>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}
