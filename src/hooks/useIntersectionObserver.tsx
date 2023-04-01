import { useState, useEffect, RefObject } from "react";

type Options = {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
};

function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: Options
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    ref.current && observer.observe(ref.current);

    return () => {
      ref?.current && observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}

export default useIntersectionObserver;
