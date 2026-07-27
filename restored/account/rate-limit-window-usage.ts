// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Convert used% → remaining% for rate-limit windows (`kZ` / export `vx`).

/**
 * Bundle `kZ` / export `vx`.
 * Clamps to `[0, 100]`; non-finite used% → 100 remaining.
 */
export function remainingPercentFromUsed(usedPercent: number): number {
  return Number.isFinite(usedPercent)
    ? Math.min(Math.max(100 - usedPercent, 0), 100)
    : 100;
}

/**
 * Bundle `Vhs` (co-located).
 * Primary/secondary snapshots need a positive window duration.
 */
export function isRateLimitWindowSnapshot(
  snapshot: { windowDurationMins?: number | null } | null | undefined,
): snapshot is { windowDurationMins?: number | null } {
  return snapshot != null && (snapshot.windowDurationMins ?? 0) > 0;
}

export type RateLimitWindowUsage = {
  usedPercent: number;
  remainingPercent: number;
  windowMinutes: number;
  resetsAt: string | null;
};

/**
 * Bundle `mEs` / export `Gv` core — pick the busiest of already-mapped windows.
 * (Caller supplies windows; `hEs`/`M_s` wiring stays in the host.)
 */
export function pickHighestUsageWindow(
  windows: readonly RateLimitWindowUsage[],
): RateLimitWindowUsage | null {
  if (windows.length === 0) return null;
  return windows.reduce((best, next) =>
    next.usedPercent > best.usedPercent ||
    (next.usedPercent === best.usedPercent &&
      next.windowMinutes > best.windowMinutes)
      ? next
      : best,
  );
}
