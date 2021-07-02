import { useEffect } from "react";

const useWillUnmount = (callback: Function) => {
  useEffect(
    () => () => {
      callback();
    },
    []
  );
};

export default useWillUnmount;
