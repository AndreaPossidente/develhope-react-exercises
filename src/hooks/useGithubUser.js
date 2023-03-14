import { useEffect, useState } from "react";

export default function useGithubUser(username) {
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

  return { user, error, loading };
}
