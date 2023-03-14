import React from "react";
import useGithubUser from "./hooks/useGithubUser";

export default function GithubUser({ username }) {
  const { user, error, loading, getGithubUser } = useGithubUser(username);
  return (
    <div>
      <div>
        <button
          onClick={() => getGithubUser("AndreaPossidente")}
          className="border rounded-md p-1 m-1"
        >
          Andrea
        </button>
        <button
          onClick={() => getGithubUser("MatteoSpinelli")}
          className="border rounded-md p-1 m-1"
        >
          Matteo
        </button>
        <button
          onClick={() => getGithubUser("Mirko-Severino")}
          className="border rounded-md p-1 m-1"
        >
          Mirko
        </button>
      </div>
      {loading && <div className="animate-ping">loading...</div>}
      {error && (
        <div className="border rounded-lg m-3 p-1 text-center max-w-[250px] overflow-hidden">
          {error.message}
        </div>
      )}
      {user && !error && (
        <div className="border rounded-lg m-3 w-[250px] min-h-[380px] overflow-hidden">
          <img src={user.avatar_url} alt={user.name} />
          <div className="flex flex-col items-center p-3">
            <h2 className="text-base font-bold">{user.name}</h2>
            <div className="text-xs">{user.location}</div>
            <p className="text-sm pt-1">{user.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
