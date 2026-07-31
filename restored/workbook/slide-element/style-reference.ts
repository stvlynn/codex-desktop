// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-36: style-ref index factory + ensure (legacy h303 / ide).

/** Legacy h303 — theme style-ref slot { index, color }. */
export function createStyleReference(index: any): {
  index: any;
  color: undefined;
} {
  return {
    index,
    color: undefined,
  };
}

/**
 * Legacy `ide` — when any style reference is present, fill missing
 * line/fill/effect/font refs with defaults.
 */
export function ensureElementStyleReferences(target: any): void {
  (target.lineReference !== undefined ||
    target.fillReference !== undefined ||
    target.effectReference !== undefined ||
    target.fontReference !== undefined) &&
    ((target.lineReference ??= createStyleReference("0")),
    (target.fillReference ??= createStyleReference("0")),
    (target.effectReference ??= createStyleReference("0")),
    (target.fontReference ??= createStyleReference("major")));
}
