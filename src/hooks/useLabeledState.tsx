import React, { useDebugValue, useState } from "react";

const useLabeledState = (initialValue: any, label: string) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${label}: ${value}`);
  return [value, setValue];
};

export default useLabeledState;
