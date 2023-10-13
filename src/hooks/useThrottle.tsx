import React, { useRef, useEffect } from "react";

function useThrottle(callback: (args: any) => void, delay: number = 100) {
  let timeout: ReturnType<typeof setTimeout>;
  const isRunning = useRef(false);

  function throttledCallback(args: Parameters<typeof callback>) {
    if (isRunning.current) {
      callback(args);
      isRunning.current = true;
      timeout = setTimeout(() => {
        isRunning.current = false;
      }, delay);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return throttledCallback;
}

export default useThrottle;
