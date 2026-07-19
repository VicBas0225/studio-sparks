import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t({ ja: "ホーム", en: "Home" }) },
    { to: "/about", label: t({ ja: "私たちについて", en: "About" }) },
    { to: "/projects", label: t({ ja: "実績", en: "Projects" }) },
    { to: "/contact", label: t({ ja: "お問い合わせ", en: "Contact" }) },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg leading-none tracking-tight">結 — Yui</span>
          <span className="label-jp hidden md:inline">Guild Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <div className="ml-2 border-l border-border pl-6">
            <LangToggle />
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LangToggle />
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-1 text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground [&.active]:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
