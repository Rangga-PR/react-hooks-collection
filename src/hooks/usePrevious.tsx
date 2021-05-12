import { useEffect, useRef } from "react";

const UsePrevious = (value: any) => {
  const ref = useRef<any | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default UsePrevious;
