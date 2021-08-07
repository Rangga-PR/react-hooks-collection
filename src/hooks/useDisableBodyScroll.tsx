import { useEffect } from "react";

const UseDisableBodyScroll = () => {
  useEffect(() => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.overflowY = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }, []);
};

export default UseDisableBodyScroll;
