type Props = {
  initials: string;
  tone: string;
  size?: number;
};

export function Avatar({ initials, tone, size = 96 }: Props) {
  return (
    <div
      className="grain flex shrink-0 items-center justify-center rounded-full font-serif text-foreground/80"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 25%, oklch(1 0 0) 0%, ${tone} 60%, oklch(0.9 0.01 60) 100%)`,
        fontSize: size * 0.36,
        letterSpacing: "-0.03em",
      }}
    >
      <span className="opacity-70">{initials}</span>
    </div>
  );
}
