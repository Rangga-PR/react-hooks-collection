import React, { useEffect } from "react";

interface Option extends AddEventListenerOptions {
  target: HTMLElement | Window | Document;
}

const useEventListener = (
  eventType: string,
  handler: Function,
  option: Option = { target: window }
) => {
  useEffect(() => {
    const { target, ...restOption } = option;
    const listener = (e: Event) => handler(e);

    target.addEventListener(eventType, listener, restOption);

    return () => {
      target.removeEventListener(eventType, listener, restOption);
    };
  }, [eventType, handler, option]);
};

export default useEventListener;
