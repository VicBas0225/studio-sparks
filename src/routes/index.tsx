import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects, team } from "@/lib/content";
import { Avatar } from "@/components/Avatar";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-8">
              <SectionLabel index="01">Yui · Guild Studio</SectionLabel>
              <h1 className="mt-8 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight">
                {t({
                  ja: (
                    <>
                      技術と美意識を、<br />
                      一つの手で結ぶ。
                    </>
                  ),
                  en: (
                    <>
                      Engineering and craft,<br />
                      tied by a single hand.
                    </>
                  ),
                })}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {t({
                  ja: "私たちは、日本各地からオンラインで集まった8名の精鋭フリーランスによるギルド型スタジオです。要件定義、設計、実装、デザイン、運用まで — Web開発を一気通貫でお引き受けします。",
                  en: "Yui is a remote-first guild of eight independent specialists based across Japan. We take web products end-to-end — from requirements and architecture to design, build and long-term operation.",
                })}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
                >
                  {t({ ja: "プロジェクトの相談を始める", en: "Start a project" })}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm"
                >
                  {t({ ja: "実績を見る", en: "See our work" })}
                </Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="border-l border-border pl-6">
                <div className="label-jp">Location</div>
                <p className="mt-2 font-serif text-2xl">Tokyo · Osaka · Fukuoka · Sapporo</p>
                <div className="mt-8 label-jp">Team</div>
                <p className="mt-2 font-serif text-2xl">8 {t({ ja: "名の職人", en: "specialists" })}</p>
                <div className="mt-8 label-jp">Since</div>
                <p className="mt-2 font-serif text-2xl">2023</p>
              </div>
            </div>
          </div>

          {/* vertical rule accent */}
          <div className="pointer-events-none absolute right-8 top-0 hidden h-full w-px bg-border md:block" />
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02">Capabilities</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t({ ja: "設計から運用まで、\n一つのチームで。", en: "From spec to ops,\nunder one roof." })}
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-border md:grid-cols-2">
              {[
                {
                  n: "01",
                  t: { ja: "要件定義 / 上流設計", en: "Discovery & Requirements" },
                  d: {
                    ja: "非エンジニアの意図を、実装可能な仕様に翻訳。手戻りを最小化する見取り図を最初に描きます。",
                    en: "We translate non-technical intent into shippable specs, keeping rework close to zero.",
                  },
                },
                {
                  n: "02",
                  t: { ja: "UI / UX デザイン", en: "UI / UX Design" },
                  d: {
                    ja: "美しさと実装性を両立するFigmaデザイン。開発への受け渡しまで責任を持ちます。",
                    en: "Figma that is beautiful and implementable. Owned all the way to developer handoff.",
                  },
                },
                {
                  n: "03",
                  t: { ja: "フロントエンド実装", en: "Frontend Engineering" },
                  d: {
                    ja: "Next.js / React を用いた、アクセシブルで軽快なプロダクトを構築します。",
                    en: "Fast, accessible products built with Next.js and React.",
                  },
                },
                {
                  n: "04",
                  t: { ja: "バックエンド / API", en: "Backend & APIs" },
                  d: {
                    ja: "Go / Python / Node.js による高速・堅牢なAPIとデータベース設計。",
                    en: "Robust APIs and schemas in Go, Python and Node.js.",
                  },
                },
                {
                  n: "05",
                  t: { ja: "クラウドインフラ", en: "Cloud Infrastructure" },
                  d: {
                    ja: "AWS を中心にIaCで再現性の高い環境を構築し、監視までセットで納品します。",
                    en: "Reproducible IaC on AWS with observability wired in from day one.",
                  },
                },
                {
                  n: "06",
                  t: { ja: "決済 / 認証連携", en: "Payments & Auth" },
                  d: {
                    ja: "Stripe、LINE、Google 認証など、外部連携の実装をスピーディに。",
                    en: "Stripe, LINE and Google auth — shipped quickly, safely, and cleanly.",
                  },
                },
              ].map((c) => (
                <div key={c.n} className="bg-background p-8 transition-colors hover:bg-secondary">
                  <div className="font-mono text-xs text-muted-foreground">{c.n}</div>
                  <div className="mt-3 font-serif text-lg">{t(c.t)}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(c.d)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel index="03">Selected Work</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t({ ja: "静かに、確かに動くもの。", en: "Quiet products that work." })}
            </h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
            {t({ ja: "すべての実績 →", en: "All projects →" })}
          </Link>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to="/projects"
              className="group grid gap-8 border-t border-border pt-8 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-5">
                <ProjectVisual hue={p.hue} label={`${p.year} · CASE 0${i + 1}`} />
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-4 label-jp">
                  <span>{p.year}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{t(p.category)}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug transition-colors group-hover:text-vermilion md:text-3xl">
                  {t(p.title)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t(p.summary)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((s) => (
                    <span key={s} className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Team preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="04">The Guild</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t({ ja: "8名の職人が、\n一つの窓口に。", en: "Eight specialists,\none point of contact." })}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t({
                ja: "それぞれ5〜7年の実務経験を持つフリーランサーが、地域を越えて集結しています。",
                en: "Independents with 5–7 years of specialist experience, gathered from across Japan.",
              })}
            </p>
            <Link to="/about" className="mt-8 inline-block border-b border-foreground pb-1 text-sm">
              {t({ ja: "メンバーを見る →", en: "Meet the team →" })}
            </Link>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {team.slice(0, 8).map((m) => (
                <div key={m.id} className="flex flex-col items-center text-center">
                  <Avatar initials={m.initials} tone={m.tone} size={88} />
                  <div className="mt-4 font-serif text-sm">{t(m.name)}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{t(m.role)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grain rounded-sm border border-border bg-secondary/50 px-8 py-16 text-center md:px-16 md:py-24">
          <span className="label-jp">{lang === "ja" ? "ご相談はいつでも" : "Always open"}</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            {t({ ja: "一度、話してみませんか。", en: "Let's have a first conversation." })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            {t({
              ja: "案件のご相談、パートナーシップのご応募、どちらも歓迎します。",
              en: "Project inquiries and partnership applications — both are welcome.",
            })}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background">
              {t({ ja: "開発のご依頼", en: "Hire the guild" })} <ArrowUpRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm">
              {t({ ja: "参画のご応募", en: "Join as partner" })}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
