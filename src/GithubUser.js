import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGithubUser = async (username) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      if (res.status === 404) {
        setError(json);
      }
      setUser(json);
    } catch (err) {
      setError(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGithubUser(username);
  }, [username]);

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
