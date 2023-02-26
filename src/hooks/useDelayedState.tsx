import { useEffect, useState } from "react";

const useDelayedState = (initialState: any, condition: boolean) => {
  const [{ state, loaded }, setState] = useState({
    state: null,
    loaded: false,
  });

  useEffect(() => {
    if (!loaded && condition) setState({ state: initialState, loaded: true });
  }, [condition, loaded]);

  const updateState = (newState: any) => {
    if (!loaded) return;
    setState({ state: newState, loaded });
  };

  return [state, updateState];
};

export default useDelayedState;
