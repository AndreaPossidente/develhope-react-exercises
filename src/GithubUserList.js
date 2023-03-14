import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [usernames, setUsernames] = useState(["AndreaPossidente"]);

  const handleAddUsername = (e) => {
    e.preventDefault();
    const username = e.target.username.value;

    setUsernames((prevUsernames) => [...prevUsernames, username]);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-6">Aggiungi un utente alla lista</h2>
      <form onSubmit={handleAddUsername}>
        <input
          className="border rounded-md p-2 mr-6"
          name="username"
          placeholder="Inserisci username"
        />
        <button className="border bg-stone-100 rounded-md p-2">Aggiungi</button>
      </form>
      <div className="mt-6 w-9/12 flex flex-wrap justify-center items-center">
        {usernames.map((username) => (
          <GithubUser username={username} />
        ))}
      </div>
    </div>
  );
}
