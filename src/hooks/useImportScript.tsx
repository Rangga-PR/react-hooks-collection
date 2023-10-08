import { useEffect, useState, useRef } from "react";

type Booleanish = boolean | "true" | "false";
type HTMLAttributeReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

interface ScriptHTMLAttributes {
  async?: Booleanish;
  charset?: string;
  crossorigin?: string;
  defer?: Booleanish;
  integrity?: string;
  nomodule?: Booleanish;
  referrerpolicy?: HTMLAttributeReferrerPolicy;
  nonce?: string;
  src?: string;
  type?: string;
}

interface Option {
  location: "head" | "body";
  attributes: ScriptHTMLAttributes;
}

const UseImportScript = (
  sourceUrl: string,
  option: Option = { location: "head", attributes: { async: true } }
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scriptRef = useRef();
  const { location, attributes } = option;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = sourceUrl;

    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value);
    }

    scriptRef.current = script;
    document[location].appendChild(script);

    script.onload = () => {
      setIsLoaded(true);
    };

    return () => {
      document[location].removeChild(script);
    };
  }, []);

  return { isLoaded, script: scriptRef };
};

export default UseImportScript;
