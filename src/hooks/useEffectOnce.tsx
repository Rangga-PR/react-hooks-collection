import { useRef, useEffect } from "react";

const useEffectOnce = (callback: () => void, when: boolean) => {
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (when && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
  }, [when]);
};

export default useEffectOnce;
