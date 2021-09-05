import React, { RefObject, useEffect, useState } from "react";

const useElmSize = (ref: RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    ref?.current &&
      setSize({
        width: ref?.current?.offsetWidth,
        height: ref?.current?.offsetHeight,
      });
  }, [ref]);

  return size;
};

export default useElmSize;
