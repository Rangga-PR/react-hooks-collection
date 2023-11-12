import { useState } from "react";

function useHistoricValue(initialValue: unknown) {
  const [history, setHistory] = useState<unknown[]>([initialValue]);

  function setValue(val: unknown) {
    setHistory([...history, val]);
  }

  function getValue(step: number) {
    return history[history.value.length - 1 - step];
  }

  return { history, setValue, getValue };
}

export default useHistoricValue;
