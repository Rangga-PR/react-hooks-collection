import { useEffect } from "react";

type OptionType = { dependency?: any[]; delay: number };

const UseDebounce = (
  callback: Function,
  { dependency = [], delay = 500 }: OptionType
) => {
  useEffect(() => {
    const debounce = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(debounce);
  }, dependency);
};

export default UseDebounce;
