import { useEffect, useState } from "react";

const UseScrollPosition = () => {
  const [position, setPosition] = useState(0);

  const handleUserPosition = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    setPosition(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleUserPosition);
    return () => {
      window.removeEventListener("scroll", handleUserPosition);
    };
  }, []);

  return position;
};

export default UseScrollPosition;
