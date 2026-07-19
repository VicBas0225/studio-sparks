type Props = { hue: string; label?: string };

// Abstract, quiet cover art for project cards — CSS-only, print-inspired.
export function ProjectVisual({ hue, label }: Props) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border"
      style={{
        background: `linear-gradient(140deg, oklch(0.98 0.005 80) 0%, oklch(0.94 0.008 70) 100%)`,
      }}
    >
      {/* concentric circles */}
      <div
        className="absolute -right-16 -top-16 h-72 w-72 rounded-full"
        style={{
          background: `radial-gradient(circle, ${hue} 0%, transparent 65%)`,
          opacity: 0.35,
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border"
        style={{ borderColor: hue, opacity: 0.35 }}
      />
      <div
        className="absolute inset-x-0 bottom-8 mx-auto h-px w-2/3"
        style={{ background: hue, opacity: 0.4 }}
      />
      {label && (
        <div className="absolute left-4 top-4 font-mono text-[10px] tracking-widest text-muted-foreground">
          {label}
        </div>
      )}
    </div>
  );
}
