import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms — applied as transition-delay. */
  delay?: number;
  /** Re-hide when scrolled out of view. Defaults to reveal-once. */
  repeat?: boolean;
};

/**
 * Scroll-reveal wrapper. Renders its child hidden (via the `[data-reveal]`
 * CSS in styles.css) and fades + lifts it into view on intersection.
 *
 * SSR-safe: server render matches the client's initial (hidden) state, so
 * there's no hydration mismatch. Users with `prefers-reduced-motion` never
 * get the hidden state — the CSS only hides under `no-preference`.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) io.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
