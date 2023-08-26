import { useCallback, useEffect, useState } from "react";

interface Option extends RequestInit {
  auto: boolean;
}

function useFetch(url: string, option: Option = { auto: false }) {
  const { auto, ...requestOption } = option;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();
  const { signal, abort } = controller;

  const fire = useCallback(
    async (requestBody: BodyInit) => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          ...requestOption,
          body: requestBody,
          signal,
        });
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
    },
    [url, option]
  );

  useEffect(() => {
    auto && fire();
  }, [auto, fire]);

  return { response, error, loading, fire, abort };
}

export default useFetch;
