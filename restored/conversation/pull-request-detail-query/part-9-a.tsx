// Restored from ref/webview/assets/pull-request-detail-query-BJjNrn31.js
// Wave GA — full polished body from `pull-request-detail-query-BJjNrn31/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 58 (verified 110/167).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/21
/* split-lane-import-depth:1 */

export function pullRequestDetailQueryV(wind3: unknown, yarrow3: unknown) {
  if (wind3.reviewThreadId != null) {
    let azure3 = yarrow3.byReviewThreadId.get(wind3.reviewThreadId);
    if (azure3 != null) return azure3;
  }
  return (wind3.url == null ? null : yarrow3.byUrl.get(wind3.url)) ?? null;
}
export function pullRequestDetailQueryUnderscore(birch3: unknown) {
  let canyon3 = new Map(),
    dew3 = new Map();
  for (let alpha4 of birch3 ?? []) {
    alpha4.reviewThreadId != null &&
      !canyon3.has(alpha4.reviewThreadId) &&
      canyon3.set(alpha4.reviewThreadId, alpha4);
    alpha4.url != null && !dew3.has(alpha4.url) && dew3.set(alpha4.url, alpha4);
  }
  return {
    byReviewThreadId: canyon3,
    byUrl: dew3,
  };
}
export function pullRequestDetailQueryY(bravo4: unknown) {
  return bravo4.filter((item) => item.type !== "event");
}
export function pullRequestDetailQueryX(
  echo4: unknown,
  falcon4: unknown,
  gamma4: unknown,
) {
  switch (falcon4) {
    case "closed":
      return "close";
    case "draft":
      return "mark-draft";
    case "open":
      return echo4 === "closed"
        ? gamma4
          ? "reopen-ready"
          : "reopen"
        : "mark-ready";
  }
}
