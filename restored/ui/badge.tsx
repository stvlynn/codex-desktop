// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dh` / export `Elt` — compact status / promo badge chip.
// Init `fh` / export `Dlt` dropped (variant class map inlined).

import type { ReactNode } from "react";
import { cx } from "./cx";

export type BadgeVariant = "default" | "promotion" | "success";

export type BadgeProps = {
  children?: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  default:
    "bg-token-badge-background text-token-badge-foreground rounded-sm px-2 py-1 text-sm leading-none",
  promotion:
    "min-h-6 rounded-full bg-token-charts-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-token-charts-purple",
  success:
    "min-h-5 rounded-full bg-token-charts-green/15 px-2 text-xs font-medium text-token-charts-green tabular-nums",
};

/**
 * Bundle export `Elt` — inline badge span with variant styles.
 */
export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps): ReactNode {
  return (
    <span
      className={cx(
        "inline-flex items-center",
        VARIANT_CLASS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Bundle export `Dlt` — Rolldown ESM init retained as no-op. */
export function ensureBadgeInit(): void {}
