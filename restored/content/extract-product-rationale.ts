// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nSa` / export `mI`. Injectable until product-rationale zod lands.

type RationaleParser = (ref: Record<string, unknown>) => unknown | null;

let parseRationale: RationaleParser | null = null;

/** Wire product-rationale parser (`qSa` in the bundle). */
export function setProductRationaleParser(parser: RationaleParser): void {
  parseRationale = parser;
}

export function extractProductRationale(
  ref: Record<string, unknown>,
): unknown | null {
  return parseRationale?.(ref) ?? null;
}
