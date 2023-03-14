import React from "react";
import useGithubUser from "./hooks/useGithubUser";

/* Create a GithubUser component that fetches the data of the username passed as a prop,
and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
 */
export default function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);
  return (
    <div>
      {loading && <div className="animate-ping">loading...</div>}
      {error && (
        <div className="border rounded-lg m-3 p-1 text-center max-w-[250px] overflow-hidden">
          {error.message}
        </div>
      )}
      {user && !error && (
        <div className="border rounded-lg m-3 max-w-[250px] overflow-hidden">
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
