import { useEffect, useState } from "react";

const UseImportScript = (sourceUrl: string, async: boolean = false) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = sourceUrl;
    script.async = async;
    document.body.appendChild(script);

    script.onload = () => {
      setIsLoaded(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { isLoaded };
};

export default UseImportScript;
