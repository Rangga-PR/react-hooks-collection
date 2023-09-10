import { useState, useEffect } from "react";

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;

  function handleScroll() {
    clearTimeout(timeout);
    if (!isScrolling) setIsScrolling(true);

    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolling;
}
