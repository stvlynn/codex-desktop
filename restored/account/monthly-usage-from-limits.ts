// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ogs` / export `fx` (+ local `vgs`).

import { remainingPercentFromUsed } from "./rate-limit-window-usage";

function asFiniteNumber(value: unknown): number | null {
  if (value == null) return null;
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

export type MonthlyUsageSnapshot = {
  limit: number;
  used: number;
  usedPercent: number;
  remainingPercent: number;
};

/** Derive monthly used% from effective limit + current usage. */
export function monthlyUsageFromLimits(
  payload: {
    effective_monthly_limit?: { limit?: unknown } | null;
    current_month_usage?: unknown;
  } | null,
): MonthlyUsageSnapshot | null {
  const limit = asFiniteNumber(payload?.effective_monthly_limit?.limit);
  const used = asFiniteNumber(payload?.current_month_usage);
  if (limit == null || used == null || limit < 0) return null;
  const usedPercent =
    limit === 0 ? 100 : Math.min(Math.max((used / limit) * 100, 0), 100);
  return {
    limit,
    used,
    usedPercent,
    remainingPercent: remainingPercentFromUsed(usedPercent),
  };
}
