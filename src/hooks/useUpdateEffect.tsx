import { useEffect, useRef } from "react";

const useUpdateEffect = (callback: Function, dependencies: any[]) => {
  const ref = useRef(true);

  useEffect(() => {
    if (ref?.current) {
      ref.current = false;
      return;
    }
    return callback();
  }, dependencies);
};

export default useUpdateEffect;
