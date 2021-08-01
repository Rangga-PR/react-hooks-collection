import { RefObject, useEffect, useState } from "react";

type ConfigType = {
  threshold?: number;
  rootMargin?: string;
  root?: HTMLElement;
};

const UseInView = (
  ref: RefObject<HTMLElement>,
  config: ConfigType = {
    threshold: 0.0,
    rootMargin: "0px",
    root: document.body,
  }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const { root, threshold, rootMargin } = config;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root, threshold, rootMargin }
    );

    ref?.current && observer.observe(ref.current);
    return () => {
      ref?.current && observer.unobserve(ref.current);
    };
  }, []);

  return isVisible;
};

export default UseInView;
