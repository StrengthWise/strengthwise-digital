import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("sw-lang");
    return (saved === "fr" ? "fr" : "en") as Lang;
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("sw-lang", l);
  };

  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "fr"
      ? "Moins de pression. Plus d'impact. | StrengthWise"
      : "Less Stress. More Impact. | StrengthWise";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
