import { useReducer } from "react";

type ActionType = {
  type: string;
  payload?: any;
};

const useAsync = (fn: Function) => {
  const initialState = { loading: false, error: null, value: null };
  const stateReducer = (_: any, action: ActionType) => {
    switch (action?.type) {
      case "start":
        return { loading: true, error: null, value: null };
      case "finish":
        return { loading: false, error: null, value: action?.payload };
      case "error":
        return { loading: false, error: action?.payload, value: null };
    }
  };
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const run = async (args = null) => {
    try {
      dispatch({ type: "start" });
      const value = await fn(args);
      dispatch({ type: "finish", payload: value });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };

  return { ...state, run };
};

export default useAsync;
