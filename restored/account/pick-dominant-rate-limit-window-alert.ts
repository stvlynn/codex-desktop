// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Uhs` / export `_x`.

import { remainingPercentFromUsed } from "./rate-limit-window-usage";
import { RATE_LIMIT_WARNING_USED_PERCENT } from "./rate-limit-window-minutes";

export type RateLimitWindowLike = {
  usedPercent?: number | null;
  windowDurationMins?: number | null;
  resetsAt?: string | null;
} | null;

export type RateLimitWindowAlert = {
  severity: "blocked" | "warning";
  usedPercent: number;
  remainingPercent: number;
  windowMinutes: number;
  resetsAt: string | null;
};

/** Pick the busier primary/secondary window when used% ≥ warning threshold. */
export function pickDominantRateLimitWindowAlert(
  windows: {
    primary?: RateLimitWindowLike;
    secondary?: RateLimitWindowLike;
  } | null,
): RateLimitWindowAlert | null {
  const { primary: t, secondary: n } = windows ?? {
    primary: null,
    secondary: null,
  };
  const r = t?.usedPercent ?? 0;
  const i = n?.usedPercent ?? 0;
  const a = t?.windowDurationMins ?? 0;
  const o = n?.windowDurationMins ?? 0;
  const s = Math.max(r, i);
  if (s < RATE_LIMIT_WARNING_USED_PERCENT) return null;
  if (i > r || (r === i && o > a)) {
    return {
      severity: s >= 100 ? "blocked" : "warning",
      usedPercent: i,
      remainingPercent: remainingPercentFromUsed(i),
      windowMinutes: o,
      resetsAt: n?.resetsAt ?? null,
    };
  }
  if (s === r) {
    return {
      severity: s >= 100 ? "blocked" : "warning",
      usedPercent: r,
      remainingPercent: remainingPercentFromUsed(r),
      windowMinutes: a,
      resetsAt: t?.resetsAt ?? null,
    };
  }
  return null;
}
