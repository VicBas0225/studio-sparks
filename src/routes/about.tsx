import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Avatar } from "@/components/Avatar";
import { team } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 結 Yui | 私たちについて" },
      { name: "description", content: "日本各地からオンラインで集まった8名のフリーランスによるギルド型Web開発スタジオ。理念、メンバー、パートナー募集について。" },
      { property: "og:title", content: "About — Yui Guild Studio" },
      { property: "og:description", content: "A remote-first guild of eight independent specialists building web products end-to-end in Japan." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <SectionLabel index="01">About</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1]">
          {t({
            ja: "地域を越え、職種を越え、\nクリエイティブを拡張する。",
            en: "Across cities. Across disciplines.\nExpanding what creativity can ship.",
          })}
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
            {t({
              ja: "私たちは、東京、大阪、福岡、北海道など、異なる地域からオンラインで集結した8名のクラウドチームです。それぞれの分野で5〜7年の実務経験を持つフリーランスが、ひとつの柔軟な開発拠点として機能しています。",
              en: "Yui is an eight-person cloud team, gathered online from Tokyo, Osaka, Fukuoka, Sapporo and beyond. Each member brings 5–7 years of independent experience, together forming a single, flexible development studio.",
            })}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
            {t({
              ja: "大きな組織のような固定費や中間マージンは発生しません。だからこそ、無駄のない適正な価格と、意思決定のフットワークの軽さで応えます。私たちの目的は、システムを納品することではなく、デザイナーの皆様が『技術の限界』を理由に案件を断らない状態を作ることです。",
              en: "We carry no overhead or middlemen. That lets us respond with fair pricing and quick decisions. Our aim isn't merely to deliver systems — it's to ensure designers never have to decline good work because of technical uncertainty.",
            })}
          </p>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02">Principles</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t({ ja: "私たちの姿勢。", en: "How we work." })}
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <dl className="space-y-10">
              {[
                {
                  n: "01",
                  t: { ja: "翻訳者として、まず聴く。", en: "Translate first, code second." },
                  d: {
                    ja: "専門用語を持ち込みません。ビジネスと非エンジニアの言葉のまま、要件を丁寧に描きます。",
                    en: "We drop the jargon. Requirements begin in the client's language, not ours.",
                  },
                },
                {
                  n: "02",
                  t: { ja: "適正価格で、泥臭く。", en: "Fair pricing, honest work." },
                  d: {
                    ja: "派手な演出はしません。仕様に真正面から向き合い、必要なものを必要なだけ作ります。",
                    en: "No theatrics. We meet the spec head-on and build only what is needed.",
                  },
                },
                {
                  n: "03",
                  t: { ja: "デザインを、100%尊重する。", en: "Respect the design, 100%." },
                  d: {
                    ja: "クリエイティブの意図を守るために、実装側から歩み寄ります。",
                    en: "The design leads. Engineering meets it, not the other way around.",
                  },
                },
                {
                  n: "04",
                  t: { ja: "長く、続けられるものを。", en: "Build things that last." },
                  d: {
                    ja: "納品後に手離れよく運用できることを、設計の第一条件にしています。",
                    en: "Operability after launch is a non-negotiable design criterion.",
                  },
                },
              ].map((p) => (
                <div key={p.n} className="grid gap-4 border-t border-border pt-6 md:grid-cols-12">
                  <div className="font-mono text-xs text-muted-foreground md:col-span-1">{p.n}</div>
                  <dt className="font-serif text-xl md:col-span-4">{t(p.t)}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-7">{t(p.d)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel index="03">The Members</SectionLabel>
        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
          {t({ ja: "8名の紹介。", en: "Meet the eight." })}
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {team.map((m, i) => (
            <article key={m.id} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-8">
              <Avatar initials={m.initials} tone={m.tone} size={96} />
              <div>
                <div className="font-mono text-xs text-muted-foreground">
                  MEMBER · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{t(m.name)}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{t(m.role)}</div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                  <span>{t(m.location)}</span>
                  <span>·</span>
                  <span>{m.birth}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed">{t(m.bio)}</p>
                <blockquote className="mt-4 border-l-2 border-vermilion pl-4 text-sm italic text-muted-foreground">
                  {t(m.quote)}
                </blockquote>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span key={s} className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Partners */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="04">Partners Wanted</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              {t({ ja: "共に挑戦する仲間を。", en: "Looking for future members." })}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t({
                ja: "私たちは、案件をお受けするだけでなく、理念に共感し、一緒に大きなプロジェクトへ挑戦する仲間を随時募集しています。将来的には法人化を目指し、長く続く組織へと成長していきます。",
                en: "We hire as we grow. If our principles resonate — and if you want to take on larger work as part of a team — we would love to hear from you. Incorporation is on the roadmap.",
              })}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground">→</span>
                <span>{t({ ja: "フルスタックエンジニア（バックエンド・インフラに強い方）", en: "Full-stack engineers (backend / infra-strong)" })}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground">→</span>
                <span>{t({ ja: "Webデザイナー / UI・UX デザイナー（上流に挑戦したい方）", en: "Web / UI-UX designers (interested in upstream direction)" })}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
