import { useEffect, useRef } from "react";

type OptionType = { dependency?: any[]; delay: number };

const UseUpdateDebounce = (
  callback: Function,
  { dependency = [], delay = 500 }: OptionType
) => {
  const ref = useRef(true);

  useEffect(() => {
    if (ref?.current) {
      ref.current = false;
      return;
    }

    const debounce = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(debounce);
  }, dependency);
};

export default UseUpdateDebounce;
