import { useState, useEffect } from "react";

export function useDetectLanguage() {
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLang(
      navigator.language ||
        (Array.isArray(navigator.languages) && navigator.languages[0])
    );
  }, [navigator?.language]);

  return lang;
}
