import type { ReactNode } from "react";

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span className="label-jp">{children}</span>
    </div>
  );
}
