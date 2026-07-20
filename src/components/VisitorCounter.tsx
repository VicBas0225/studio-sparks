import { useEffect, useState } from "react";

const STORAGE_KEY = "dream_cha_visits";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Get current count from localStorage
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);

    // Increment once per session
    if (!sessionStorage.getItem("visit_counted")) {
      sessionStorage.setItem("visit_counted", "1");
      const next = stored + 1;
      localStorage.setItem(STORAGE_KEY, String(next));
      setCount(next);
    } else {
      setCount(stored);
    }
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-0.5 font-mono text-[9px] text-foreground backdrop-blur-sm whitespace-nowrap lg:px-3 lg:py-1 lg:text-[11px]">
      <span>訪問者数：❤️</span>
      <span className="tabular-nums font-semibold">{count.toLocaleString()}</span>
    </div>
  );
}
