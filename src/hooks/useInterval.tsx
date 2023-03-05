import { useRef, useEffect } from "react";

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback?.current && savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, []);
};

export default useInterval;
