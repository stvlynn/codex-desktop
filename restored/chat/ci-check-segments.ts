// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Aggregate individual CI checks into colored ring segments (`aHl`).

import type { CiCheckItem, CiCheckSegment } from "./ci-check-status";

/**
 * Groups check items by status and returns non-empty ring segments with ratios
 * (helper used by `iHl` / export alias `do`).
 */
export function buildCiCheckSegments(
  checks: readonly CiCheckItem[],
): CiCheckSegment[] {
  const total = checks.length;
  if (total === 0) return [];

  const counts = {
    failing: checks.filter((check) => check.status === "failing").length,
    neutral: checks.filter((check) => check.status === "neutral").length,
    passing: checks.filter((check) => check.status === "passing").length,
    pending: checks.filter((check) => check.status === "pending").length,
    skipped: checks.filter((check) => check.status === "skipped").length,
    unknown: checks.filter((check) => check.status === "unknown").length,
  };

  return [
    {
      color: "var(--color-token-charts-green)",
      count: counts.passing,
      key: "passing",
    },
    {
      color: "var(--color-token-charts-red)",
      count: counts.failing,
      key: "failing",
    },
    {
      color: "var(--color-token-charts-yellow)",
      count: counts.pending,
      key: "pending",
    },
    {
      color: "var(--color-token-description-foreground)",
      count: counts.neutral + counts.skipped + counts.unknown,
      key: "skipped",
    },
  ]
    .filter((segment) => segment.count > 0)
    .map((segment) => ({
      color: segment.color,
      key: segment.key,
      ratio: segment.count / total,
    }));
}
