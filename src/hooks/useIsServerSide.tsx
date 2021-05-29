import React, { useEffect, useState } from "react";

const isDOMavailable = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const useIsServerSide = () => {
  const [isServerSide, setIsServerSide] = useState(!isDOMavailable);

  useEffect(() => {
    setIsServerSide(!isDOMavailable);
    return () => setIsServerSide(false);
  }, []);
};

export default useIsServerSide;
