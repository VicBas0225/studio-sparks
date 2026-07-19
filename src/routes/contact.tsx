import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 結 Yui | お問い合わせ" },
      { name: "description", content: "案件のご相談、パートナー参画のご応募はこちらから。24時間以内に日本語または英語でご返信いたします。" },
      { property: "og:title", content: "Contact — Yui Guild Studio" },
      { property: "og:description", content: "Project inquiries and partnership applications. Replies within 24 hours in Japanese or English." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useLang();
  const [type, setType] = useState<"project" | "partner">("project");
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <SectionLabel index="01">Contact</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1]">
          {t({ ja: "一度、話してみませんか。", en: "Let's start a conversation." })}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t({
            ja: "案件のご相談も、パートナーとしてのご応募も、下記フォームからお気軽にどうぞ。24時間以内に日本語または英語でご返信いたします。",
            en: "Whether you're bringing a project or applying to join the guild, drop us a line below. We reply within 24 hours in Japanese or English.",
          })}
        </p>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 md:grid-cols-12">
          {/* left column: info */}
          <div className="md:col-span-4">
            <SectionLabel index="02">Details</SectionLabel>
            <dl className="mt-8 space-y-8">
              <div>
                <dt className="label-jp">Email</dt>
                <dd className="mt-2 font-serif text-lg">hello@yui.studio</dd>
              </div>
              <div>
                <dt className="label-jp">{t({ ja: "対応時間", en: "Hours" })}</dt>
                <dd className="mt-2 font-serif text-lg">10:00 – 19:00 JST</dd>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {t({ ja: "平日（土日祝除く）", en: "Monday to Friday" })}
                </dd>
              </div>
              <div>
                <dt className="label-jp">{t({ ja: "言語", en: "Languages" })}</dt>
                <dd className="mt-2 font-serif text-lg">日本語 · English</dd>
              </div>
              <div>
                <dt className="label-jp">{t({ ja: "拠点", en: "Based in" })}</dt>
                <dd className="mt-2 font-serif text-lg">
                  {t({ ja: "日本各地（完全リモート）", en: "Across Japan · Remote-first" })}
                </dd>
              </div>
            </dl>
          </div>

          {/* right column: form */}
          <div className="md:col-span-8">
            <SectionLabel index="03">Inquiry</SectionLabel>

            {/* type toggle */}
            <div className="mt-8 inline-flex rounded-full border border-border p-1">
              <button
                onClick={() => setType("project")}
                className={`rounded-full px-5 py-2 text-xs transition-colors ${
                  type === "project" ? "bg-foreground text-background" : "text-muted-foreground"
                }`}
              >
                {t({ ja: "① 開発のご依頼", en: "① Project inquiry" })}
              </button>
              <button
                onClick={() => setType("partner")}
                className={`rounded-full px-5 py-2 text-xs transition-colors ${
                  type === "partner" ? "bg-foreground text-background" : "text-muted-foreground"
                }`}
              >
                {t({ ja: "② パートナー応募", en: "② Join as partner" })}
              </button>
            </div>

            {sent ? (
              <div className="mt-10 rounded-sm border border-border bg-secondary/50 px-6 py-10 text-center">
                <Check className="mx-auto text-vermilion" size={28} />
                <div className="mt-4 font-serif text-2xl">
                  {t({ ja: "送信が完了しました。", en: "Message received." })}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t({ ja: "24時間以内にご返信いたします。", en: "We'll reply within 24 hours." })}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 border-b border-foreground pb-1 text-xs"
                >
                  {t({ ja: "別のお問い合わせを送る", en: "Send another" })}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-10 space-y-8"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field
                    label={t({ ja: "お名前", en: "Name" })}
                    required
                    input={<input required className={inputCls} placeholder={lang === "ja" ? "山田 太郎" : "Your name"} />}
                  />
                  <Field
                    label={t({ ja: "会社 / 組織", en: "Company" })}
                    input={<input className={inputCls} placeholder={lang === "ja" ? "任意" : "Optional"} />}
                  />
                  <Field
                    label="Email"
                    required
                    input={<input required type="email" className={inputCls} placeholder="you@company.com" />}
                  />
                  <Field
                    label={
                      type === "project"
                        ? t({ ja: "概算予算", en: "Rough budget" })
                        : t({ ja: "職種", en: "Discipline" })
                    }
                    input={
                      type === "project" ? (
                        <select className={inputCls} defaultValue="">
                          <option value="" disabled>{lang === "ja" ? "選択してください" : "Select"}</option>
                          <option>{lang === "ja" ? "〜100万円" : "Under ¥1M"}</option>
                          <option>{lang === "ja" ? "100〜500万円" : "¥1M – ¥5M"}</option>
                          <option>{lang === "ja" ? "500〜2000万円" : "¥5M – ¥20M"}</option>
                          <option>{lang === "ja" ? "2000万円〜" : "¥20M+"}</option>
                          <option>{lang === "ja" ? "相談したい", en: "Not sure — let's discuss" as unknown as string}</option>
                        </select>
                      ) : (
                        <select className={inputCls} defaultValue="">
                          <option value="" disabled>{lang === "ja" ? "選択してください" : "Select"}</option>
                          <option>Frontend Engineer</option>
                          <option>Backend Engineer</option>
                          <option>Full-stack Engineer</option>
                          <option>UI/UX Designer</option>
                          <option>Art Director</option>
                          <option>SRE / Infra</option>
                        </select>
                      )
                    }
                  />
                </div>

                <Field
                  label={
                    type === "project"
                      ? t({ ja: "プロジェクトについて", en: "About the project" })
                      : t({ ja: "自己紹介・実績", en: "About you / portfolio" })
                  }
                  required
                  input={
                    <textarea
                      required
                      rows={6}
                      className={inputCls}
                      placeholder={
                        type === "project"
                          ? lang === "ja"
                            ? "現状の課題、実現したいこと、スケジュールなど、分かる範囲でご記入ください。"
                            : "Tell us about the problem you're solving, the outcome you want, and rough timing."
                          : lang === "ja"
                            ? "経歴、得意分野、ポートフォリオのURLなどをお聞かせください。"
                            : "Your background, strengths, and links to past work."
                      }
                    />
                  }
                />

                <div className="flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    {t({
                      ja: "送信内容は本チームメンバーのみが確認します。",
                      en: "Only guild members will see your message.",
                    })}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
                  >
                    {t({ ja: "送信する", en: "Send message" })}
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-0";

function Field({
  label,
  input,
  required,
}: {
  label: string;
  input: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-jp">
        {label} {required && <span className="text-vermilion">*</span>}
      </span>
      <div className="mt-2">{input}</div>
    </label>
  );
}
