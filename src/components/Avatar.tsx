import { useState } from "react";

type Props = {
  initials: string;
  tone: string;
  size?: number;
  photo?: string;
  name?: string;
};

export function Avatar({ initials, tone, size = 96, photo, name }: Props) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      <img
        src={photo}
        alt={name ?? initials}
        onError={() => setFailed(true)}
        className="shrink-0 rounded-full object-cover object-top ring-2 ring-[var(--dreamgold)] ring-offset-2 ring-offset-background"
        style={{ width: size, height: size }}
      />
    );
  }

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
