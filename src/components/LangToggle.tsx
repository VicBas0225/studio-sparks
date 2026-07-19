import { useLang } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest">
      <button
        onClick={() => setLang("ja")}
        aria-pressed={lang === "ja"}
        className={`transition-colors ${lang === "ja" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        JA
      </button>
      <span className="text-hairline">|</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`transition-colors ${lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  );
}
