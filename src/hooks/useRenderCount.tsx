import { useEffect, useState } from "react";

const useRenderCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => setCount((prev) => prev + 1), []);
  return count;
};

export default useRenderCount;
