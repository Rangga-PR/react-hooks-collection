import { useRef, useEffect } from "react";

const useOnWindowScroll = (callback: () => void) => {
  const listener = useRef<EventListenerOrEventListenerObject | null | void>(
    null
  );

  useEffect(() => {
    if (listener.current)
      window.removeEventListener("scroll", listener.current);
    listener.current = window.addEventListener("scroll", callback);
    return () => {
      listener.current &&
        window.removeEventListener("scroll", listener.current);
    };
  }, [callback]);
};

export default useOnWindowScroll;
