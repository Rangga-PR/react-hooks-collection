import { useRef, useState, useEffect, useCallback } from "react";

export const useStateCallback = (initialState: unknown) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null);

  const setStateCallback = useCallback(
    (st: unknown, cb: (args: unknown) => void) => {
      cbRef.current = cb;
      setState(st);
    },
    []
  );

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
};
