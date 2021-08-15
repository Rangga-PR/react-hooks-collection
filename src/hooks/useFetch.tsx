import { useCallback, useEffect, useState } from "react";

function useFetch(url: string, options: Object, auto = false) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fire = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [url, options]);

  useEffect(() => {
    auto && fire();
  }, []);

  return { response, error, loading, fire };
}

export default useFetch;
