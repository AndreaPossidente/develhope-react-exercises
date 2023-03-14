import React from "react";
import useLoginForm from "./hooks/useLoginForm";

export default function Login() {
  const { username, password, handleInputChange } = useLoginForm();
  return (
    <form>
      <input
        className="border rounded-md p-1 m-1"
        onChange={handleInputChange}
        value={username}
        name="username"
        placeholder="Username"
      />
      <input
        className="border rounded-md p-1 m-1"
        onChange={handleInputChange}
        value={password}
        name="password"
        type="password"
        placeholder="Password"
      />
      {(username !== "" || password !== "") &&
        JSON.stringify({ username, password })}
    </form>
  );
}
