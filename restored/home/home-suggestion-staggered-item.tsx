// Restored from ref/webview/assets/home-suggestion-staggered-item-BUaAT3C4.js
// Staggered enter animation for home suggestion rows/cards.
// Stage 3: Aut→usePrefersReducedMotion; hft→motion; $dt/kut/Ivt/jvt dropped.

import type { ReactNode } from "react";
import { motion } from "../vendor/framer-motion";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";

export type HomeSuggestionStaggeredItemProps = {
  children?: ReactNode;
  className?: string;
  index: number;
  variant?: "list" | "grid" | string;
};

/**
 * Bundle export `t` — fades/slides children in with an index-based delay.
 */
export function HomeSuggestionStaggeredItem({
  children,
  className,
  index,
  variant,
}: HomeSuggestionStaggeredItemProps): ReactNode {
  const reduceMotion = usePrefersReducedMotion();
  const list = variant === "list";
  const animate = { opacity: 1, transform: "translateY(0)" };
  const initial = {
    opacity: 0,
    transform: reduceMotion ? "translateY(0)" : `translateY(${list ? 4 : 8}px)`,
  };
  const transition = {
    delay: reduceMotion ? 0 : index * 0.025,
    duration: 0.15,
    ease: [0.23, 1, 0.32, 1] as const,
  };
  return (
    <motion.div
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureHomeSuggestionStaggeredItemInit(): void {}
