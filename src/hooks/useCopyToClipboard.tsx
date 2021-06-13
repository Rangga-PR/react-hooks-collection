import { useCallback, useState } from "react";

const useCopyToClipboard = (txt: string, onCopy: Function) => {
  const [error, setError] = useState(null);

  const copyToClipboard = (txt: string, callback: Function) => {
    const cb = navigator.clipboard;
    cb.writeText(txt)
      .then(() => {
        callback && callback();
      })
      .catch((err) => setError(err));
  };

  const copy = useCallback(() => {
    copyToClipboard(txt, onCopy);
  }, [txt]);

  return [copy, error];
};

export default useCopyToClipboard;
