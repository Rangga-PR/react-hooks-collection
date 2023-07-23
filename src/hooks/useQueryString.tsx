import { useState, useEffect } from "react";

function useQueryString() {
  const [query, setQuery] = useState({});

  const getQuery = () => {
    const parsedQuery = new URLSearchParams(window.location.search);
    setQuery(Object.fromEntries(parsedQuery));
  };

  useEffect(() => {
    window.addEventListener("popstate", getQuery);
    window.addEventListener("pushstate", getQuery);
    window.addEventListener("replacestate", getQuery);

    return () => {
      window.removeEventListener("popstate", getQuery);
      window.removeEventListener("pushstate", getQuery);
      window.removeEventListener("replacestate", getQuery);
    };
  }, []);

  return query;
}

export default useQueryString;
