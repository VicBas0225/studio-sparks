import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl tracking-tight">結 — Yui</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t({
              ja: "東京、大阪、福岡、北海道 — 地域を越えて集まった8名のフリーランスによる、Webシステム開発ギルド。",
              en: "A guild of eight independents based across Tokyo, Osaka, Fukuoka and Hokkaido — building web systems end-to-end.",
            })}
          </p>
        </div>
        <div>
          <div className="label-jp">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">{t({ ja: "ホーム", en: "Home" })}</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">{t({ ja: "私たちについて", en: "About" })}</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">{t({ ja: "実績", en: "Projects" })}</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">{t({ ja: "お問い合わせ", en: "Contact" })}</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-jp">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@yui.studio</li>
            <li>{t({ ja: "平日 10:00 – 19:00 (JST)", en: "Weekdays 10:00 – 19:00 JST" })}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Yui Guild Studio.</span>
          <span className="font-mono tracking-widest">CRAFTED IN JAPAN · REMOTE-FIRST</span>
        </div>
      </div>
    </footer>
  );
}
