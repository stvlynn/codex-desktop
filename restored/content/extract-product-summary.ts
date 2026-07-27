// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tSa` / export `_I`. Injectable until product-reviews zod lands.

type SummaryParser = (ref: Record<string, unknown>) => unknown | null;

let parseSummary: SummaryParser | null = null;

/** Wire product-summary parser (`GSa` summary field). */
export function setProductSummaryParser(parser: SummaryParser): void {
  parseSummary = parser;
}

export function extractProductSummary(ref: Record<string, unknown>): unknown | null {
  return parseSummary?.(ref) ?? null;
}
