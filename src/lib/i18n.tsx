import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ja" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T>(pair: { ja: T; en: T }) => T;
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang") as Lang | null;
      if (saved === "ja" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {}
  };

  const t = <T,>(pair: { ja: T; en: T }): T => pair[lang];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
