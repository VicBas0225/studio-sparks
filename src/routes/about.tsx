import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Avatar } from "@/components/Avatar";
import { team } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dream-cha | 私たちについて" },
      { name: "description", content: "Dream-chaは、デザイナーとバックエンドエンジニアが組む完全成果報酬型の共同開発チームです。あなたの挑戦リスクをゼロにします。" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <SectionLabel index="01">About</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.1]">
          {t({
            ja: <>孤独なクリエイターを、<br />リスクと限界から解放するために。</>,
            en: <>Built to free solo creators<br />from risk and technical walls.</>,
          })}
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-[1.8] text-muted-foreground">
            {t({
              ja: "私たち自身も、かつては全く同じ壁にぶつかっていました。デザインのプロと、バックエンドのプロ。お互いに1人では、クライアントの『フルパッケージの要求』に応えられず、悔しい思いをしてきました。",
              en: "We hit the same walls ourselves. A design expert and a backend expert — each alone, each unable to answer a client's full-package demand. Both frustrated.",
            })}
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground">
            {t({
              ja: "「それぞれの得意を等価交換し、リスクも等価交換すれば、個人でも企業に負けない開発ができるのではないか？」この問いから、Dream-chaは結成されました。あなたが持つクリエイティブの可能性を、システムの壁で終わらせないために。",
              en: "\"What if we traded skills equally and shared risk equally — could independents compete with agencies?\" That question formed Dream-cha. We exist so your creative potential never ends at a technical wall.",
            })}
          </p>
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Pain points — empathy section */}
      <section className="bg-[#F5F5F7] dark:bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel index="02">{t({ ja: "共感の起点", en: "Where we started" })}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
            {t({ ja: "あなたは今、どちらの壁の前にいますか？", en: "Which wall are you standing in front of?" })}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: { ja: "ケースA：デザイナーの限界", en: "Case A: The designer's ceiling" },
                body: {
                  ja: "クライアントから会員サイトや独自の決済機能を頼まれた。デザインやWordPressは得意だけど、バックエンドのセキュリティやデータベース構築をどう処理すればいいか分からない……",
                  en: "Your client wants a members-only site with custom payments. You own the design and WordPress side — but backend security and DB architecture are a complete mystery.",
                },
              },
              {
                tag: { ja: "ケースB：バックエンド開発者の限界", en: "Case B: The engineer's ceiling" },
                body: {
                  ja: "システムの裏側は完璧に組める。だけど、フロントのデザインセンスに自信がなくて、直受け案件の提案を躊躇してしまう……",
                  en: "You can build bulletproof systems. But design confidence is a gap that keeps you from pitching direct clients and billing what you're worth.",
                },
              },
              {
                tag: { ja: "共通の壁：既存の選択肢の罠", en: "The shared wall: bad existing options" },
                body: {
                  ja: "企業に外注しようとすると見積もりが高すぎて予算が合わない。クラウドソーシングで探すと前払い・立替が必要。本当に動くものが納品されるか不安だし、そもそも手元の予算がない……",
                  en: "Agency quotes blow the budget. Freelancer platforms demand cash upfront before a line of code is written. No budget, no trust, no good options.",
                },
              },
            ].map((c) => (
              <div key={c.tag.ja} className="rounded-sm border border-border bg-background p-8">
                <div className="label-jp text-[var(--dreamblue)]">{t(c.tag)}</div>
                <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">{t(c.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel index="03">{t({ ja: "チームのメリット", en: "What working with us looks like" })}</SectionLabel>
        <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "3つの約束。", en: "Three promises." })}
        </h2>
        <dl className="mt-14 space-y-0 divide-y divide-border">
          {[
            {
              n: "01",
              title: { ja: "初期費用0円・完全成果報酬制", en: "Zero upfront · 100% performance-based" },
              body: {
                ja: "あなたの身銭を切るリスク（前払い・立替）を完全に排除します。クライアントからの着金ベース、または案件検収後の支払いで問題ありません。リスクは私たちが半分背負います。だからこそ、本気でクリーンな開発を行います。",
                en: "We eliminate your personal financial risk entirely. Payment is triggered by your client's payment or project acceptance. We share the risk — which is why we ship clean, serious work every time.",
              },
            },
            {
              n: "02",
              title: { ja: "フロント × バックエンドのワンストップ対応", en: "Front-end × back-end under one roof" },
              body: {
                ja: "窓口は1つ。デザイン課題から複雑なAPI連携・決済・セキュリティまで一括で引き受けるため、あなたのクライアントへの提案力が劇的に跳ね上がります。クライアントには「フルパッケージで対応できるチーム」として紹介できます。",
                en: "One point of contact for everything — from design challenges to complex API integrations, payments and security. Your pitch to clients becomes: \"yes, we can do all of it.\"",
              },
            },
            {
              n: "03",
              title: { ja: "デザイン・クリエイティブへの絶対不可侵", en: "Absolute respect for your creative vision" },
              body: {
                ja: "デザイナー様としてのこだわり、ブランドの世界観を100%尊重します。私たちはそれを裏側から動かす「エンジン」の構築に徹します。あなたのFigmaに手を加えることは絶対にありません。",
                en: "Your craft and brand worldview are untouchable. We build the engine that runs behind it. We never touch your Figma files.",
              },
            },
          ].map((p) => (
            <div key={p.n} className="grid gap-6 py-10 md:grid-cols-12">
              <div className="font-mono text-xs text-muted-foreground md:col-span-1">{p.n}</div>
              <dt className="font-serif text-xl md:col-span-4">{t(p.title)}</dt>
              <dd className="text-sm leading-[1.8] text-muted-foreground md:col-span-7">{t(p.body)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Member profiles */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel index="04">{t({ ja: "メンバー紹介", en: "Meet the team" })}</SectionLabel>
        <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          {t({ ja: "2名の専門家が、あなたを支える。", en: "Two specialists. One complete team." })}
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {team.map((m, i) => (
            <article key={m.id} className={`border border-border p-8 rounded-sm ${m.id.includes('m2') || m.id.includes('m3')}`}>
              <div className="flex items-start gap-6">
                <Avatar initials={m.initials} tone={m.tone} size={88} photo={m.photo} name={t(m.name)} />
                <div>
                  <div className="font-mono text-xs text-muted-foreground">MEMBER · {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">{t(m.name)}</h3>
                  <div className="mt-1 text-sm text-[var(--dreamblue)]">{t(m.role)}</div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                    <span>{t(m.location)}</span>
                    {m.birth !== "----" && <><span>·</span><span>{m.birth}</span></>}
                  </div>
                </div>
              </div>
              {m.bio.ja !== "プロフィール準備中。" ? (
                <>
                  <p className="mt-6 text-sm leading-[1.8] text-muted-foreground">{t(m.bio)}</p>
                  <blockquote className="mt-5 border-l-2 border-[var(--dreamblue)] pl-4 text-sm italic leading-[1.8] text-muted-foreground">
                    {t(m.quote)}
                  </blockquote>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {m.skills.map((s) => (
                      <span key={s} className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground italic">{t({ ja: "プロフィール準備中", en: "Profile coming soon" })}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="rounded-sm border border-[var(--dreamblue)]/30 bg-[var(--dreamblue)]/5 px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "まずは、30分話してみませんか？", en: "Start with a free 30-minute chat." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({
              ja: "仕様書がない状態でも、商談前でも全く問題ありません。",
              en: "No brief, no spec needed. Just bring your problem.",
            })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--dreamblue)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "無料相談を申し込む", en: "Book free consult" })} <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://line.me/ti/g2/VTUOklFBUpBzUCwZLs-opd7-hxSKRaooS7cowQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINEで相談（24時間受付）", en: "Chat on LINE (24h)" })}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
