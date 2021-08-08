import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [item, setItem] = useState<string | null>(null);

  const handleStorage = () => {
    const value = window.localStorage.getItem(key);
    setItem(value);
  };

  const set = useCallback(
    (val) => {
      window.localStorage.setItem(key, val);
    },
    [key]
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  return { item, set };
};

export default useLocalStorage;
