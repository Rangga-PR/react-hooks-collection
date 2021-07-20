import React, { RefObject, useEffect } from "react";

const useClickInside = (ref: RefObject<HTMLElement>, callback: Function) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
