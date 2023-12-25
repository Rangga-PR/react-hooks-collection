import { useState } from "react";

export const useCallbackState = (initialState: unknown) => {
  type StateValue = typeof initialState;
  const [value, setValue] = useState<StateValue>(initialState);

  const setStateValue = (
    newState: StateValue,
    callback?: (newState: StateValue) => void
  ) => {
    setValue(newState);
    callback && callback(newState);
  };

  return [value, setStateValue];
};
