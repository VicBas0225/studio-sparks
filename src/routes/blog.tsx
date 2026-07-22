import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "お客様の声 — Dream-cha | Client Stories" },
      { name: "description", content: "Dream-chaを使ってデザイナーやノーコードディレクターが案件を解決した実際の声。成果報酬型の安心感をリアルなフィードバックで確認できます。" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <section className="hero-bg mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <Reveal><SectionLabel index="01">{t({ ja: "お客様の声", en: "Client Stories" })}</SectionLabel></Reveal>
        <Reveal as="h1" delay={80} className="mt-8 hero-title">
          {t({ ja: "デザインを守り抜いた、開発パートナーとしてのお客様の声。", en: "Client voices — from designers whose work we protected." })}
        </Reveal>
        <Reveal as="p" delay={160} className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
          {t({
            ja: "システム要件の壁を、デザインを1ミリも崩さずに突破したクリエイターのリアルな声をそのまま掲載します。",
            en: "Real voices from creators who broke through system-requirement walls without altering their design at all.",
          })}
        </Reveal>
      </section>

      <div className="hairline mx-auto max-w-7xl h-[2px]" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal as="article" key={post.id} delay={(i % 2) * 100} className="card-lift rounded-sm border border-border overflow-hidden">
              {/* Card header */}
              <div className="bg-[#F5F5F7] dark:bg-secondary/40 px-8 pt-8 pb-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[var(--dreamblue)]/10 px-3 py-1 font-mono text-[10px] tracking-wider text-[var(--dreamblue)]">
                    {t(post.tag)}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="mt-4 font-serif text-xl leading-snug">{t(post.title)}</h2>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{t(post.intro)}</p>
              </div>

              {/* Story body */}
              <div className="px-8 py-6 space-y-5">
                <div>
                  <div className="label-jp text-[var(--dreamblue)]">{t({ ja: "依頼者プロフィール", en: "About the client" })}</div>
                  <p className="mt-2 text-sm leading-[1.8] text-muted-foreground">{t(post.profile)}</p>
                </div>

                {open === post.id ? (
                  <>
                    <div>
                      <div className="label-jp text-red-500">{t({ ja: "直面していた絶望", en: "The problem" })}</div>
                      <blockquote className="mt-2 border-l-2 border-red-200 pl-4 text-sm leading-[1.8] italic text-muted-foreground">
                        {t(post.despair)}
                      </blockquote>
                    </div>
                    <div>
                      <div className="label-jp text-[var(--dreamblue)]">{t({ ja: "Dream-chaの対応", en: "How Dream-cha helped" })}</div>
                      <blockquote className="mt-2 border-l-2 border-[var(--dreamblue)]/40 pl-4 text-sm leading-[1.8] italic text-muted-foreground">
                        {t(post.response)}
                      </blockquote>
                    </div>
                    <div>
                      <div className="label-jp text-green-600 dark:text-green-400">{t({ ja: "解決後の未来", en: "Life after" })}</div>
                      <blockquote className="mt-2 border-l-2 border-green-300 pl-4 text-sm leading-[1.8] italic text-muted-foreground">
                        {t(post.future)}
                      </blockquote>
                    </div>
                    <button
                      onClick={() => setOpen(null)}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      {t({ ja: "▲ 閉じる", en: "▲ Close" })}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setOpen(post.id)}
                    className="text-sm text-[var(--dreamblue)] hover:opacity-80"
                  >
                    {t({ ja: "続きを読む →", en: "Read full story →" })}
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal className="rounded-sm border border-[var(--dreamblue)]/30 cta-bg px-8 py-14 text-center md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl">
            {t({ ja: "次はあなたの番です。", en: "You could be the next story." })}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.8] text-muted-foreground">
            {t({ ja: "システム要件の策定や技術的な仕様に関するご相談を承ります。", en: "We take on consultations about system requirements and technical specifications." })}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://lin.ee/ncRMNzs"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-sm bg-[#06C755] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#06C755]/20 transition-opacity hover:opacity-90"
            >
              {t({ ja: "LINE公式アカウントでテクニカル相談をする（無料）", en: "Technical consult on our LINE Official Account (free)" })} <ArrowUpRight size={16} className="cta-arrow" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm">
              {t({ ja: "お問い合わせフォーム", en: "Contact form" })}<span className="form-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
