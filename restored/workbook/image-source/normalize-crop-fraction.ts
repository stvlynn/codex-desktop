// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: crop inset → 0…1 fraction (legacy workbookHelper 311).

import { clampUnit } from "./clamp-unit";

/**
 * Legacy workbookHelper 311 — number / `N%` / `Npx` → clamped 0…1 fraction.
 */
export function normalizeCropFraction(
  raw: number | string,
  axisPx: number | undefined,
  label: string,
): number {
  if (typeof raw == "number") return clampUnit(raw, 0, 1);
  const trimmed = raw.trim();
  const percent = /^(\d+(?:\.\d+)?)%$/.exec(trimmed);
  if (percent) return clampUnit(Number(percent[1]) / 100, 0, 1);
  const px = /^(\d+(?:\.\d+)?)px$/i.exec(trimmed);
  if (px) {
    if (axisPx === undefined)
      throw Error(
        `${label} uses px units but the image dimensions are unavailable.`,
      );
    return clampUnit(Number(px[1]) / axisPx, 0, 1);
  }
  throw Error(
    `${label} must be a number, a "[number]%" string, or a "[number]px" string.`,
  );
}
