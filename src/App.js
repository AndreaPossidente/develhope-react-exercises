import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Andrea" />} />
    </Routes>
  );
}
