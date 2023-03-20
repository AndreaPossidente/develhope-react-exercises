import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGithubUser(username) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  return { user: data, error, loading: isLoading };
}
