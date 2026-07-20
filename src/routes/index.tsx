import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies, team } from "@/lib/content";
import { Avatar } from "@/components/Avatar";
import { ArrowUpRight, ShieldCheck, Layers, Paintbrush } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <SectionLabel index="01">Dream-cha · ドリームチャ</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2rem,5.5vw,4rem)] leading-[1.08] tracking-tight">
            {t({
              ja: <>デザインはできる。<br />でも、システムが組めないから、<br />その高単価案件を諦めますか？</>,
              en: <>Great design, zero backend fear.<br />We are your complete tech partner.</>,
            })}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
            {t({
              ja: "『Dream-cha（ドリームチャ＝Dream Challenge）』は、デザイナーのシステム不安とエンジニアのデザイン不安を相殺する、完全成果報酬型の共同開発チームです。あなたの挑戦リスクをゼロにします。",
              en: "Dream-cha is a performance-based co-development team that eliminates the gap between design and engineering. We take on the technical risk so you can focus on winning the work.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "⚡ 30分・無料壁打ち相談", en: "⚡ Free 30-min consult" })}
              <ArrowUpRight size={15} />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {t({ ja: "解決実績を見る →", en: "See our case studies →" })}
            </Link>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Pain points */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel index="02">{t({ ja: "よくある悩み", en: "Sound familiar?" })}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "皆さんには、このような経験はありませんか？", en: "Have you ever been here?" })}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                label: { ja: "デザイナーの限界", en: "The designer's wall" },
                body: {
                  ja: "クライアントから会員サイトや独自決済を頼まれた。デザインやWordPressは得意だけど、バックエンドのセキュリティやDB構築をどう処理すればいいか分からない……",
                  en: "Your client wants a membership site with custom payments. Design and WordPress — no problem. But backend security and database architecture? Complete blank.",
                },
              },
              {
                label: { ja: "バックエンド開発者の限界", en: "The engineer's wall" },
                body: {
                  ja: "システムの裏側は完璧に組める。だけど、フロントのデザインセンスに自信がなくて、直受け案件の提案を躊躇してしまう……",
                  en: "You can architect perfect systems. But your design confidence stops you from pitching direct clients, leaving money on the table every month.",
                },
              },
              {
                label: { ja: "既存の選択肢の罠", en: "The existing options trap" },
                body: {
                  ja: "企業に外注すると見積もりが高すぎる。クラウドソーシングは前払い・立替が必要。本当に動くものが納品されるか不安だし、そもそも手元の予算がない……",
                  en: "Agency quotes blow the budget. Freelancer platforms require upfront payment before you see a single line of code. Neither option works.",
                },
              },
            ].map((c) => (
              <div
                key={c.label.ja}
                className="rounded-sm border border-border bg-background p-8"
              >
                <div className="label-jp text-[var(--dreamblue)]">{t(c.label)}</div>
                <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">{t(c.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel index="03">{t({ ja: "私たちの約束", en: "What we promise" })}</SectionLabel>
        <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "3つのメリット。", en: "Three guarantees." })}
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck size={28} className="text-[var(--dreamblue)]" />,
              title: { ja: "初期費用0円・完全成果報酬", en: "Zero upfront · Performance-based" },
              body: {
                ja: "前払い・立替は一切不要。クライアントからの着金ベース、または案件検収後の支払いで対応します。あなたの身銭を切るリスクを完全に排除。",
                en: "No prepayment, no cash advances. We invoice after your client pays or the project is accepted. Your financial risk: zero.",
              },
            },
            {
              icon: <Layers size={28} className="text-[var(--dreamblue)]" />,
              title: { ja: "フロント × バックエンド ワンストップ", en: "Full-stack, one point of contact" },
              body: {
                ja: "窓口は1つ。デザイン課題から複雑なAPI連携・決済・セキュリティまで一括で引き受け、あなたの提案力を劇的に引き上げます。",
                en: "One contact for everything. From UI challenges to complex API integrations, payments and security — your proposal power multiplied.",
              },
            },
            {
              icon: <Paintbrush size={28} className="text-[var(--dreamblue)]" />,
              title: { ja: "デザインへの絶対不可侵", en: "Your design is sacred" },
              body: {
                ja: "デザイナー様のこだわりとブランドの世界観を100%尊重します。私たちはそれを裏側から動かす「エンジン」の構築に徹します。",
                en: "Your creative vision and brand identity are untouchable. We build the engine that powers it from behind — nothing more, nothing less.",
              },
            },
          ].map((b) => (
            <div key={b.title.ja} className="border-t-2 border-[var(--dreamblue)] pt-8">
              {b.icon}
              <h3 className="mt-4 font-serif text-xl leading-snug">{t(b.title)}</h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{t(b.body)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Case study preview */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel index="04">{t({ ja: "解決事例", en: "Case Studies" })}</SectionLabel>
              <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                {t({ ja: "Before / After の数字で語る。", en: "The numbers tell the story." })}
              </h2>
            </div>
            <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
              {t({ ja: "すべての実績 →", en: "All projects →" })}
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <div key={c.id} className="rounded-sm border border-border bg-background p-8">
                <div className="label-jp text-[var(--dreamblue)]">{t(c.category)}</div>
                <h3 className="mt-3 font-serif text-xl leading-snug">{t(c.title)}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{t(c.before)}</p>
                <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                  {c.metrics.map((m) => (
                    <div key={m.value} className="bg-background p-4 text-center">
                      <div className="font-serif text-2xl text-[var(--dreamblue)]">{m.value}</div>
                      <div className="mt-1 text-[10px] text-muted-foreground">{t(m.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel index="05">{t({ ja: "チーム", en: "The Team" })}</SectionLabel>
        <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "2名の専門家が、あなたの案件を守る。", en: "Two specialists dedicated to your project." })}
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.id} className="flex gap-6 border-t border-border pt-8">
              <Avatar initials={m.initials} tone={m.tone} size={80} />
              <div>
                <div className="font-serif text-xl">{t(m.name)}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t(m.role)}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span key={s} className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
            {t({ ja: "詳しいプロフィールを見る →", en: "Full profiles →" })}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="rounded-sm border border-[var(--dreamblue)]/30 bg-[var(--dreamblue)]/5 px-8 py-16 text-center md:px-16 md:py-24">
          <span className="label-jp text-[var(--dreamblue)]">{t({ ja: "ご相談はいつでも・無料", en: "Always free to ask" })}</span>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl">
            {t({ ja: "「こんな相談でいいのかな？」は不要です。", en: "No such thing as a stupid question here." })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.8] text-muted-foreground md:text-base">
            {t({
              ja: "仕様書がない段階でも、商談前でも全く問題ありません。30分の無料壁打ち相談で、あなたの課題に最短の答えをお出しします。",
              en: "No brief needed. No spec required. A free 30-minute session is all we need to give you a clear path forward.",
            })}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "⚡ 無料壁打ち相談をする", en: "⚡ Book free consult" })}
              <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINEで今すぐ相談（24時間受付）", en: "Chat on LINE (24h)" })}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
