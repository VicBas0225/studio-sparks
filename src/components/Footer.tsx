import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <img
            src="/dream-cha-logo.png"
            alt="Dream-cha"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--dreamgold)] ring-offset-2 ring-offset-background"
          />
          <p className="mt-4 max-w-sm text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "理想の未来へ、技術で挑み続ける。デザイナーとエンジニアが組む完全成果報酬型の共同開発チームです。",
              en: "Challenging toward your ideal future through technology. A performance-based co-development team of designer and engineer.",
            })}
          </p>
          <a
            href="https://line.me/ti/g2/VTUOklFBUpBzUCwZLs-opd7-hxSKRaooS7cowQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t({ ja: "LINEで無料相談（24時間受付）", en: "Free LINE consult (24h)" })} <ArrowUpRight size={13} />
          </a>
        </div>
        <div>
          <div className="label-jp">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">{t({ ja: "ホーム", en: "Home" })}</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">{t({ ja: "私たちについて", en: "About" })}</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">{t({ ja: "実績", en: "Projects" })}</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">{t({ ja: "お客様の声", en: "Stories" })}</Link></li>
            <li><Link to="/recruit" className="text-muted-foreground hover:text-foreground">{t({ ja: "採用情報", en: "Careers" })}</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">{t({ ja: "無料相談", en: "Contact" })}</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-jp">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@dream-cha.jp</li>
            <li>{t({ ja: "24時間受付（LINEにて）", en: "24h via LINE" })}</li>
            <li>{t({ ja: "完全リモート対応", en: "Fully remote" })}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Dream-cha. {t({ ja: "All rights reserved.", en: "All rights reserved." })}</span>
          <span className="font-mono tracking-widest">DREAM · CHALLENGE · DELIVER</span>
        </div>
      </div>
    </footer>
  );
}
