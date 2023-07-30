import { useCallback, useEffect, useState } from "react";

interface Option extends RequestInit {
  auto: false;
}

function useFetch(url: string, option: Option = { auto: false }) {
  const { auto, ...requestOption } = option;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const fire = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(url, requestOption);
      if (res instanceof Error) setError(res);
      else {
        const json = await res.json();
        setResponse(json);
      }
    } catch (error) {
      if (error instanceof Error) setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, requestOption]);

  useEffect(() => {
    auto && fire();
  }, []);

  return { response, error, loading, fire };
}

export default useFetch;
