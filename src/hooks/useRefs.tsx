import { useRef, useEffect, RefObject } from "react";

const useRefs = (names: string[]) => {
  const formRefs: Record<string, RefObject<unknown>> = {};

  useEffect(() => {
    for (const name of names) {
      formRefs[name] = useRef(null);
    }
  }, [names]);

  return formRefs;
};

export default useRefs;
