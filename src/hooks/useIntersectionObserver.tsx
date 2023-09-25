import { useState, useEffect, RefObject } from "react";

type Options = {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: Options
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { once, ...observerOptions } = options;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIsIntersecting(true);
      once && observer.unobserve(ref.current);
    }
  }, observerOptions);

  useEffect(() => {
    ref.current && observer.observe(ref.current);

    return () => {
      ref?.current && observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}

export default useIntersectionObserver;
