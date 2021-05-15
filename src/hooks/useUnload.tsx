import { useEffect, useRef } from "react";

const useUnload = (fn: Function) => {
  const callback = useRef<any | Function>(fn);

  useEffect(() => {
    const onUnload = callback.current;
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [callback]);
};

export default useUnload;
