import { useRef, useEffect } from "react";

type Color = "light" | "dark";

export function usePreferColorScheme(color: Color = "light") {
  const prefer = useRef<boolean>();

  useEffect(() => {
    prefer.current =
      window &&
      window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme: ${color})`).matches;
  }, []);

  return prefer.current;
}
