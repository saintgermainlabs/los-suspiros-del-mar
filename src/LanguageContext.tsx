import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { t } from "./i18n";
import type { Lang, Translations } from "./i18n";

const STORAGE_KEY = "suspiros-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage unavailable — fall back to Spanish
  }
  return "es";
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}>({ lang: "es", setLang: () => {}, tr: t.es as unknown as Translations });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore write failures
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
