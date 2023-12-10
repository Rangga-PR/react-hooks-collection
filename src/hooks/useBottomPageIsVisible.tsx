import { useState, useEffect } from "react";

function useIsBottomPageVisible() {
  const [isVisible, setIsVisible] = useState<boolean>();
  let timeout: ReturnType<typeof setTimeout>;

  const handleVisible = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      isVisible.value =
        document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
          document.documentElement.clientHeight);
    }, 1000);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleVisible);

    return () => {
      document.removeEventListener("scroll", handleVisible);
      clearTimeout(timeout);
    };
  }, []);

  return isVisible;
}

export default useIsBottomPageVisible;
