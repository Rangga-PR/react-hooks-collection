import { useEffect, useState } from "react";

const UseDetectDevice = () => {
  const [isAndroid, setAndroid] = useState(false);
  const [isIOS, setIOS] = useState(false);
  const [isOther, setOther] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    if (/android/i.test(userAgent)) setAndroid(true);
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
      setIOS(true);
    else setOther(true);
  }, []);

  return { isAndroid, isIOS, isOther };
};

export default UseDetectDevice;
