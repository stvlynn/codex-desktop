// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eSa` / export `gI`. Injectable until product-reviews zod lands.

type ReviewsParser = (ref: Record<string, unknown>) => unknown[];

let parseReviews: ReviewsParser | null = null;

/** Wire product-reviews parser (`GSa` in the bundle). */
export function setProductReviewsParser(parser: ReviewsParser): void {
  parseReviews = parser;
}

export function extractProductReviews(ref: Record<string, unknown>): unknown[] {
  return parseReviews?.(ref) ?? [];
}
