import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — 結 Yui | 実績" },
      { name: "description", content: "Yui Guild の代表的なWebシステム開発実績。サブスクリプション基盤、大規模EC刷新、マッチングポータルなど — 技術スタックと成果数値を公開しています。" },
      { property: "og:title", content: "Projects — Yui Guild Studio" },
      { property: "og:description", content: "Selected work: subscription platforms, high-volume marketplaces, and large-scale e-commerce rebuilds." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <SectionLabel index="01">Projects</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1]">
          {t({ ja: "静かな仕事の、\n確かな記録。", en: "A quiet record of\ngood work delivered." })}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t({
            ja: "きらびやかな宣伝文句は置き、技術構成と成果数値だけを淡々と並べます。ご相談時は、より詳細な資料をお渡しできます。",
            en: "We skip the marketing language and lay out the stack and the numbers. Deeper case decks are available on request.",
          })}
        </p>
      </section>

      <div className="hairline mx-auto max-w-7xl" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <article key={p.id} className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="md:sticky md:top-24">
                  <ProjectVisual hue={p.hue} label={`${p.year} · CASE 0${i + 1}`} />
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="border border-border px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="flex items-center gap-4 label-jp">
                  <span>{p.year}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{t(p.category)}</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl leading-snug md:text-4xl">{t(p.title)}</h2>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t(p.summary)}</p>

                <div className="mt-10 space-y-8">
                  <div>
                    <div className="label-jp">{t({ ja: "課題と解決策", en: "Challenge & Approach" })}</div>
                    <p className="mt-3 text-sm leading-relaxed md:text-base">{t(p.challenge)}</p>
                  </div>
                  <div>
                    <div className="label-jp">{t({ ja: "成果", en: "Outcome" })}</div>
                    <p className="mt-3 text-sm leading-relaxed md:text-base">{t(p.outcome)}</p>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border">
                  {p.metrics.map((m) => (
                    <div key={m.value} className="bg-background p-5">
                      <div className="font-serif text-2xl md:text-3xl">{m.value}</div>
                      <div className="mt-2 text-[11px] text-muted-foreground">{t(m.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
