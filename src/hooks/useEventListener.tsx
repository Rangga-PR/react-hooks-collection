import React, { useEffect } from "react";

const useEventListener = (
  eventType: string,
  handler: Function,
  elm = window
) => {
  useEffect(() => {
    const listener = (e: Event) => handler(e);

    elm.addEventListener(eventType, listener);

    return () => {
      elm.removeEventListener(eventType, listener);
    };
  }, [eventType, handler, elm]);
};

export default useEventListener;
