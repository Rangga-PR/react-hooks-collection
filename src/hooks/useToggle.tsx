import { useState } from "react";

const useToggle = (defaultValue: Boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = (val: Boolean) => {
    setValue((currentValue) =>
      typeof val === "boolean" ? val : !currentValue
    );
  };

  return [value, toggle];
};

export default useToggle;
