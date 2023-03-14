import React from "react";
import useLoginForm from "./hooks/useLoginForm";

export default function Login() {
  const {
    data: { username, password },
    handleForm,
  } = useLoginForm();
  return (
    <form>
      <input
        className="border rounded-md p-1 m-1"
        onChange={handleForm}
        value={username}
        name="username"
        placeholder="Username"
      />
      <input
        className="border rounded-md p-1 m-1"
        onChange={handleForm}
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
