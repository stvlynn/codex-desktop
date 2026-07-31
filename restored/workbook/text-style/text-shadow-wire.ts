// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: injectable CSS-shadow normalizer (boundary keeps shadow-CSS + `noe`).

export type TextShadowNormalizer = (value: unknown) => unknown;

let normalizeTextShadowImpl: TextShadowNormalizer = (value) => {
  if (value === undefined) return;
  if (typeof value != "string") return value;
  return;
};

/** Used by TextStyle.shadow setter; boundary wires legacy `noe` after shadow-CSS parse. */
export function normalizeTextShadow(value: unknown): unknown {
  return normalizeTextShadowImpl(value);
}

/** Legacy bridge — call with boundary `noe` once shadow-CSS helpers are live. */
export function wireNormalizeTextShadow(fn: TextShadowNormalizer): void {
  normalizeTextShadowImpl = fn;
}
