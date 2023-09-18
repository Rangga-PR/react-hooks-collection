import { useState, useEffect } from "react";

export function useIsVisible(element: HTMLElement | Document = document) {
  const [isVisible, setIsVisible] = useState(true);

  function handleVisibility() {
    setIsVisible(!element.hidden);
  }

  useEffect(() => {
    element.addEventListener("visibilitychange", handleVisibility);

    return () => {
      element.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return isVisible;
}
