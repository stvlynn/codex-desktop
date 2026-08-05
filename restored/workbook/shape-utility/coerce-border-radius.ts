// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: borderRadius number | token → px (legacy workbookHelper 305).

import { resolveBorderRadiusToken } from "./border-radius-tokens";

/**
 * Legacy workbookHelper 305 — coerce borderRadius to a non-negative px.
 */
export function coerceBorderRadiusPx(value: number | string): number {
  if (typeof value == "number") {
    if (!Number.isFinite(value) || value < 0)
      throw Error("borderRadius must be a non-negative finite number (px).");
    return value;
  }
  const trimmed = value.trim();
  if (!trimmed) throw Error("borderRadius cannot be an empty string.");
  const token = resolveBorderRadiusToken(trimmed);
  if (token !== null) return token;
  const numeric = Number(trimmed);
  if (Number.isFinite(numeric) && numeric >= 0) return numeric;
  throw Error(`Unsupported borderRadius token: "${value}"`);
}
