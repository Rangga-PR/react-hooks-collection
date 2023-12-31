import { useRef, useEffect } from "react";

export function useSelection() {
  const selected = useRef<string>();

  function handleSelection() {
    selected.current = document.getSelection()?.toString();
  }

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelection);

    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, []);

  return selected.current;
}
