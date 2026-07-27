// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rSa` / export `hI`. Injectable until product-rationale zod lands.

type CitationsParser = (ref: Record<string, unknown>) => unknown[];

let parseCitations: CitationsParser | null = null;

/** Wire product-citations parser (`qSa` citations field). */
export function setProductCitationsParser(parser: CitationsParser): void {
  parseCitations = parser;
}

export function extractProductCitations(ref: Record<string, unknown>): unknown[] {
  return parseCitations?.(ref) ?? [];
}
